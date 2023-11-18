import { useRecoilState, useRecoilValue } from 'recoil';
import { useState, useEffect } from "react";

import { getDataSelector } from '../../utils/FetchDataRecoil';
import { isfollowing, page } from '../../utils/FetchDataRecoil';
import Pagination from "./Pagination";
import ShowImg from "../Features/ShowImg";
import styled from "styled-components";

const ShowFeed = () => {

    const isFollowing = useRecoilValue(isfollowing);
    const [imgDataFollowing, imgDataRecommend] = useRecoilValue(getDataSelector);

    const [pageNum, setPage] = useRecoilState(page);
    const [url, setUrl] = useState(imgDataFollowing);

    const limit = 5;
    const offset = (pageNum - 1) * limit;



    useEffect(() => {
        setUrl(isFollowing ? imgDataFollowing : imgDataRecommend);
    }, [isFollowing, imgDataFollowing, imgDataRecommend])
    return (
        <>
            <Feed className="image">
                {url.slice(offset, offset + limit).map(img => {
                    return <ShowImg
                        key={img.id}
                        imgUrl={img.download_url}
                        imgId={img.id}
                        authorName={img.author}
                        width={img.width}
                        height={img.height}
                    />
                })}
            </Feed>

            <footer className="pagination">
                <Pagination
                    total={url.length}
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
`