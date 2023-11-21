import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

import { userInfo } from "../../utils/FetchDataRecoil";
import { useRecoilState } from "recoil";
import { postsDataState, usersDataState } from "../../store/ServerData";

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
                        console.log(likedList);
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
    return (
        <>
            <Sticky>
                <TopSection>
                    <IoMdArrowBack style={{
                        width: "2em",
                        height: "2em",
                        marginLeft: "8px",
                    }}
                        onClick={() => navigate('/')} />
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                        MUMAGE
                    </div>
                    <div></div>
                </TopSection>

            </Sticky>
            <Frame>
                <Div>
                    <div style={{ marginLeft: "10px" }}>
                        {UserProfile}
                    </div>
                    <div style={{ marginBottom: "5px" }}>{post.nickname}</div>
                </Div>
                <Img src={post.imageUrl} key={post.postId} alt='icon' />
            </Frame>
            <div>
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
                <HeartInfo>
                    {post["liked"]}
                    <div onClick={onHeartClickHandler}>
                        {isHeart() ?
                            <AiFillHeart style={{ width: "2.5em", height: "2.5em", color: "red" }} />
                            : <AiOutlineHeart style={{ width: "2.5em", height: "2.5em", color: "red" }} />
                        }
                    </div>
                </HeartInfo>

                <SongInfo>
                    <div style={{ fontStyle: "italic" }}>Song Title: {post.title}</div>
                </SongInfo>
            </div>
        </>
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

const Sticky = styled.div`
    position:sticky;
    top:0;
    text-align:center;
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
    padding: 20px;
`

const SongInfo = styled.div`
    display: block;
    padding: 3px;
    text-align:center;
    margin-left: 5px;
    margin-top: 20px;
    margin-bottom: 25px;
`

const ProfileImg = styled.img`
    border-radius: 10em;
    width: 2em;
    height: 2em;
    object-fit: cover;
`