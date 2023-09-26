import { useRecoilValue } from 'recoil';
import { useState, useEffect, useRef } from "react";

import getDataSelector from '../../utils/FetchDataRecoil';

import Pagination from "./Pagination";
import ShowImg from "../Features/ShowImg";
import styled from "styled-components";

const ShowFeed = ({isFollowing}) => {
    const [url, setUrl] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 5;
    const offset = (page - 1) * limit;

    const [imgDataFollowing, imgDataRecommend] = useRecoilValue(getDataSelector);

    const isRendered = useRef(false);

    useEffect(() => {
        if (!isRendered.current){
            setUrl(isFollowing ? imgDataFollowing : imgDataRecommend);
        }
        setPage(1);
    },[imgDataFollowing, imgDataRecommend, isFollowing])
    
    return ( 
        <>
            <Feed>
                {url.slice(offset, offset + limit).map(img => {
                    return <ShowImg key = {img.id} imgUrl = {img.download_url} imgId = {img.id}/>
                })}
            </Feed>
                    
            <footer>
                <Pagination 
                    total={url.length} 
                    limit={limit} 
                    page={page} 
                    setPage={setPage}
                />
            </footer>
        
        </>
     );
}
 
export default ShowFeed;

const Feed = styled.div `
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:5em;
    margin-left: 6em;
`