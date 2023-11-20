import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { filteredPostsState, isfollowing, page, postsFilterState } from '../../utils/FetchDataRecoil';
import Pagination from "./Pagination";
import styled from "styled-components";

import { AiOutlineHeart } from 'react-icons/ai';


const ShowFeed = () => {
    const navigate = useNavigate();
    const isFollowing = useRecoilValue(isfollowing);
    const [pageNum, setPage] = useRecoilState(page);
    const setFilter = useSetRecoilState(postsFilterState);
    const postsList = useRecoilValue(filteredPostsState);

    useEffect(() => {
        const updateFilter = () => {
            isFollowing ? setFilter("Following") : setFilter("Recommend");
        }
        updateFilter();
        window.scrollTo(0, 0);
    }, [isFollowing, setFilter]);

    const limit = 4;
    const offset = (pageNum - 1) * limit;
    return (
        <>
            <Feed className="image">
                {postsList.slice(offset, offset + limit).map((post, i) => {
                    const numOfHearts = 304;
                    return (
                        <Frame key={post.postId}>
                            <Div>
                                <Div>
                                    <div>
                                    </div>
                                    <div style={{ textAlign: "center" }}>{post["nickname"]}</div>
                                </Div>
                                <Img
                                    src={post["imageUrl"]}
                                    key={post["postId"]}
                                    alt='icon'
                                    onClick={() => { navigate(`imgDetail/${post["postId"]}`); }}
                                />
                                <DivBot>
                                    {numOfHearts}
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

const DivBot = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 20px;
    gap:5px;
`

const ProfileImg = styled.img`
    border-radius: 10em;
    width: 2em;
    height: 2em;
    object-fit: cover;
`