import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { filteredPostsState, isfollowing, page, postsFilterState, usersState } from '../../utils/FetchDataRecoil';
import Pagination from "./Pagination";
import styled from "styled-components";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GrDocumentSound } from "react-icons/gr";


const ShowFeed = () => {
    const navigate = useNavigate();
    const isFollowing = useRecoilValue(isfollowing);
    const [pageNum, setPage] = useRecoilState(page);
    const setFilter = useSetRecoilState(postsFilterState);
    const postsList = useRecoilValue(filteredPostsState);
    const users = useRecoilValue(usersState);

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
                            {postsList.slice(offset, offset + limit).map((post) => {
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
                                            <NameDiv>
                                                {UserProfile}
                                                {post["nickname"]}
                                            </NameDiv>
                                            <Img
                                                src={post["imageUrl"]}
                                                key={post["postId"]}
                                                alt='icon'
                                                onClick={() => { navigate(`imgDetail/${post["postId"]}`); }}
                                            />
                                            <DivBot>
                                                {post["liked"]}
                                                <AiOutlineHeart style={{ width: "1.5em", height: "1.5em", color: "red" }} />
                                            </DivBot>
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
    border-radius: 10px;
    padding: 0.5em 0em 0.5em 0em;
    margin-bottom: 10px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
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
    justify-content: space-around;
    
`
const DivBot = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 20px;
    gap:5px;
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