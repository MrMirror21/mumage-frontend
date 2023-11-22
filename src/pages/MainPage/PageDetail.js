import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

import { userInfo } from "../../utils/FetchDataRecoil";
import { useRecoilState } from "recoil";
import { postsDataState, usersDataState } from "../../store/ServerData";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

const PageDetail = () => {
    const params = useParams();
    const postIdentifier = params.postId;
    const [posts, setPosts] = useRecoilState(postsDataState);
    const [users, setUsers] = useRecoilState(usersDataState);
    const [userOwn, setUserOwn] = useRecoilState(userInfo);

    const isHeart = () => {
        return userOwn["liked"].some((likedPostId) => post["postId"] === likedPostId["postId"])
    }

    const onHeartClickHandler = () => {
        if (isHeart()) {
            setPosts((prev) => {
                return prev.map((post) => {
                    if (post["postId"] === parseInt(postIdentifier)) {
                        return {
                            ...post,
                            "liked": post["liked"] - 1,
                        };
                    } else {
                        return post;
                    }
                })
            })
            setUsers((prev) => {
                return prev.map((p) => {
                    if (p["userId"] === userOwn["userId"]) {
                        const likedList = p["liked"].filter((i) => i["postId"] !== parseInt(postIdentifier));
                        return {
                            ...p,
                            "liked": likedList,
                        }
                    }
                    return p;
                });
            })
            setUserOwn((prev) => {
                const likedList = prev["liked"].filter((i) => {
                    return i["postId"] !== parseInt(postIdentifier);
                })
                return {
                    ...prev,
                    "liked": likedList,
                }
            })
        } else {
            setPosts((prev) => {
                return prev.map((post) => {
                    if (post["postId"] === parseInt(postIdentifier)) {
                        return {
                            ...post,
                            "liked": post["liked"] + 1,
                        };
                    } else {
                        return post;
                    }
                })
            })
            setUsers((prev) => {
                return prev.map((p) => {
                    if (p["userId"] === userOwn["userId"]) {
                        const likedList = [...p["liked"], { "postId": parseInt(postIdentifier) }];
                        return {
                            ...p,
                            "liked": likedList,
                        }
                    }
                    return p;
                });
            })
            setUserOwn((prev) => {
                const likedList = [...prev["liked"], { "postId": parseInt(postIdentifier) }];
                return {
                    ...prev,
                    "liked": likedList,
                }
            })
        }
    }

    const post = posts[postIdentifier - 1];
    const user = users.find((e) => {
        return e["userId"] === post["userId"]
    });
    const Profile = user["profileUrl"];
    const UserProfile = typeof (user["profileUrl"]) === 'string' ? <ProfileImg src={user["profileUrl"]} alt="profileImg" />
        : <Profile style={{
            borderRadius: "10em",
            width: "2em",
            height: "2em",
            objectFit: "cover",
        }} />;
    const navigate = useNavigate();

    const [playData, setPlayData] = useState({ isPlaying: false, currentlyPlaying: null });
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (playData.currentlyPlaying) {
            playData.currentlyPlaying.current.pause();
        }
        audioRef.current.play();
        setPlayData({ isPlaying: true, currentlyPlaying: audioRef });
    };

    const togglePause = () => {
        if (playData.currentlyPlaying) {
            playData.currentlyPlaying.current.pause();
            setPlayData({ isPlaying: false, currentlyPlaying: null });
        }
    };

    const style = {
        fontSize: "30px",
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "33em", border: "3px solid #BDBDBD", borderRadius: "15px" }}>


                <TopSection style={{ marginTop: "1.5em", marginLeft: "0.25em" }}>
                    <IoMdArrowBack style={{
                        width: "2em",
                        height: "2em",
                        marginTop: "1.8em",
                    }}
                        onClick={() => navigate(-1)} />
                    <Header style={{ marginRight: "1em" }}>
                        MUMAGE
                    </Header>
                    <div></div>
                </TopSection>
                <Frame>
                    <Div onClick={() => navigate(`/userPage/${post["userId"]}`)}>
                        <div style={{ marginLeft: "10px" }}>
                            {UserProfile}
                        </div>
                        <div style={{ marginBottom: "5px", fontWeight: "bold" }}>{post.nickname}</div>

                    </Div>
                    <div style={{ display: "flex", "justifyContent": "center" }}>
                        <Img src={post.imageUrl} key={post.postId} alt='icon' />
                    </div>

                </Frame>

                <Detail>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                            {post["title"]}
                        </div>
                        <cite style={{ fontSize: "13px", color: "#BDBDBD" }}>
                            {post["artist"]}
                        </cite>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <SongPlaySection onClick={playData.isPlaying ? togglePause : togglePlay} >
                            {playData.isPlaying ?
                                <FontAwesomeIcon className="audio" icon={faStop} style={style} />
                                : <FontAwesomeIcon className="audio" icon={faPlay} style={style}
                                />}
                            <audio ref={audioRef}>
                                <source src={post["trackUrl"]} />
                            </audio>
                        </SongPlaySection>
                    </div>

                    <HeartInfo>
                        <div style={{ color: "#BDBDBD" }}>
                            {post["liked"]}
                        </div>
                        <div onClick={onHeartClickHandler}>
                            {isHeart() ?
                                <AiFillHeart style={{ width: "2em", height: "2em", color: "#5151C6" }} />
                                : <AiOutlineHeart style={{ width: "2em", height: "2em", color: "#5151C6" }} />
                            }
                        </div>
                    </HeartInfo>
                </Detail>
                <div style={{ padding: "2em" }}>
                    <HeadComment>
                        {post.context === "" ?
                            <div style={{ color: "#BDBDBD" }}>No Context</div>
                            : post.context
                        }
                    </HeadComment>
                    <Row>
                        {post.genre.map((e, i) => {
                            return (
                                <GenreInfo key={i}>
                                    <div style={{ fontStyle: "italic" }}>
                                        #{e}
                                    </div>
                                </GenreInfo>
                            )
                        })}

                    </Row>
                </div>
            </div>
        </div>
    );
}

export default PageDetail;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`

const Frame = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    padding: 0.5em 0em 0.5em 0em;
    margin-top: 20px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    max-width: 38em;
    object-fit: cover;
    margin-bottom: 2em;
    
&:hover {
        background: #404040;
        cursor: pointer;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: flex-start;
    gap: 20px;
`

const HeadComment = styled.div`
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
`

const GenreInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px;
    border-radius: 10px;
    width: auto;
    height: 30px;
    text-align:center;
    margin-left: 5px;
    margin-top: 10px;
    background: var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%));
    color:white;
`

const HeartInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top : -15px;
`

const ProfileImg = styled.img`
    border-radius: 10em;
    width: 2em;
    height: 2em;
    object-fit: cover;
`

const SongPlaySection = styled.div`
`

const Header = styled.header`
    text-align: center;
  padding-bottom: 5px;
  margin: 16px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  color: transparent;
  background: linear-gradient(271deg, #888BF4 0%, #5151C6 100%);
  -webkit-background-clip: text;
  position: relative;

  &::before {
    content: 'MUMAGE';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4px;
    text-shadow: 
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
    z-index: -1;
  }
`

const Detail = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content:center;
    justify-item: center;
    margin-top: -1em;
`

const ContextSection = styled.div`
  display: inline-block;
`