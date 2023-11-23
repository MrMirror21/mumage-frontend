import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { filteredPostsState, isfollowing, page, postsFilterState, userInfo } from '../../utils/FetchDataRecoil';
import Pagination from "./Pagination";
import styled from "styled-components";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GrDocumentSound } from "react-icons/gr";
import { postsDataState, usersDataState } from '../../store/ServerData';
import TrackCard from '../Features/GetTrack';
import { ReactComponent as Globe } from '../../assets/globe.svg';


const ShowFeed = () => {
    const navigate = useNavigate();
    const isFollowing = useRecoilValue(isfollowing);
    const [pageNum, setPage] = useRecoilState(page);
    const setFilter = useSetRecoilState(postsFilterState);
    const postsList = useRecoilValue(filteredPostsState);
    const [users, setUsers] = useRecoilState(usersDataState);

    const [posts, setPosts] = useRecoilState(postsDataState);

    const [userOwn, setUserOwn] = useRecoilState(userInfo);

    const isHeart = (postId) => {
        return userOwn["liked"].some((likedPostId) => postId === likedPostId["postId"])
    }

    const onHeartClickHandler = (postIdentifier) => {
        if (isHeart(postIdentifier)) {
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
    useEffect(() => {
        const updateFilter = () => {
            isFollowing ? setFilter("Following") : setFilter("Recommend");
        }
        updateFilter();
    }, [isFollowing, setFilter]);
    const limit = 5;
    const offset = (pageNum - 1) * limit;


    return (
        <>
            {
                postsList.length !== 0 ?

                    <>
                        <Feed className="image">
                            {postsList.slice(offset, offset + limit).map((post, i) => {
                                const user = users.find((e) => {
                                    return e["userId"] === post["userId"];
                                });
                                const Profile = user["profileUrl"];
                                const UserProfile = typeof (user["profileUrl"]) === 'string' ? <ProfileImg src={user["profileUrl"]} alt="profileImg" />
                                    : <Profile style={{
                                        borderRadius: "10em",
                                        width: "1.5em",
                                        height: "1.5em",
                                        objectFit: "cover",
                                    }} />;
                                return (
                                    <Frame key={post.postId}>
                                        <Div style={{ alignItems: "center" }}>
                                            <NameDiv className="userInfo" onClick={() => {
                                                navigate(`/userPage/${post["userId"]}`)
                                            }}>
                                                <div>
                                                    {UserProfile}
                                                </div>
                                                <div>
                                                    {post["nickname"]}
                                                </div>
                                            </NameDiv>
                                            <Img
                                                src={post["imageUrl"]}
                                                key={post["postId"]}
                                                alt='icon'
                                                onClick={() => { navigate(`imgDetail/${post["postId"]}`); }}
                                            />
                                            <DivBotInfo>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "7px", justifyContent: "center", alignItems: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                                    <div style={{ fontWeight: "bold" }}>{post["title"]}</div>
                                                    <div style={{ color: "#BDBDBD", fontSize: "14px", fontStyle: "italic" }}> {post["artist"]}</div>
                                                </div>
                                                <SongPlaySection>
                                                    <TrackCard track={post["trackUrl"]} />
                                                </SongPlaySection>

                                                <DivBot>
                                                    <Globe
                                                        style={{ width: "1.5em", height: "1.5em", marginRight: "10px" }}
                                                        onClick={() => window.open(`${post["externalUrl"]}`)}
                                                    />
                                                    <div>
                                                        {post["liked"]}
                                                    </div>
                                                    <div onClick={() => onHeartClickHandler(post["postId"])}>
                                                        {isHeart(post["postId"]) ?
                                                            <AiFillHeart style={{ width: "1.5em", height: "1.5em", color: "#5151C6" }} />
                                                            : <AiOutlineHeart style={{ width: "1.5em", height: "1.5em", color: "#5151C6" }} />}

                                                    </div>

                                                </DivBot>
                                            </DivBotInfo>
                                        </Div>
                                    </Frame>
                                );
                            })}
                        </Feed>

                        <footer className="pagination">
                            <Pagination
                                total={postsList.length}
                                limit={limit}
                                pageNum={pageNum}
                                setPage={setPage}
                            />
                        </footer>
                    </> :
                    <EmptyPage>
                        <GrDocumentSound size="8em" color="#BDBDBD" />
                        <div style={{ color: "#BDBDBD", fontSize: "25px", fontStyle: "italic" }}>No Posts</div>
                    </EmptyPage>

            }
        </>
    );
}

export default ShowFeed;

const Feed = styled.div`
    display: flex;
                                            flex-direction:column;
                                            align-items:center;
                                            padding: 2em;
                                            gap: 10px;
                                            `

const Frame = styled.div` 
                                            background-color: #FFF;
                                            max-width: 32em;
                                            border-radius: 10px;
                                            padding: 0.5em 0em 0.5em 0em;
                                            margin-bottom: 10px;
                                            `

const Img = styled.img`
                                            width: 100%;
                                            height: 100%;
                                            max-width: 32em;
                                            object-fit: cover;

                                            &:hover {
                                                background: #404040;
                                            cursor: pointer;
    }
                                            `

const Div = styled.div`
                                            display: flex;
                                            flex-direction: column;
                                            gap: 5px;
                                            `
const NameDiv = styled.div`
                                            display: flex;
                                            width: 100%;
                                            jutify-contenr: start;
                                            align-items: center;
                                            line-height: 0.8;
                                            gap: 10px;
                                            padding: 0 0 0 10px;
                                            `
const DivBot = styled.div`
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            line-height: 0.8;
                                            gap: 10px;
                                            padding: 0 15px 0 0px;
                                            `

const DivBotInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    align-item: center;
    
`

const ProfileImg = styled.img`
                                            border-radius: 10em;
                                            width: 1.5em;
                                            height: 1.5em;
                                            object-fit: cover;
                                            `

const EmptyPage = styled.div`
                                            width: 100%;
                                            height:100%;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: center;
                                            align-items: center;
                                            padding: 10em;
                                            background-color: #F6F7F9;
                                            `


const SongPlaySection = styled.div`
display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            
                                            
    `