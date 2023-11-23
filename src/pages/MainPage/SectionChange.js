import { React, Suspense } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';

import './SectionChange.css';

import Loading from '../../components/Features/Loading';
import ShowFeed from '../../components/ShowingFeed/ImageRender';
import { isfollowing, page } from '../../utils/FetchDataRecoil';
import { useState } from 'react';
import SectionBar from '../../components/Features/MenuSection';

const SectionDevide = () => {
    const [isFollowing, setIsFollowing] = useRecoilState(isfollowing);
    const setPage = useSetRecoilState(page);
    const [index, setIndex] = useState(isFollowing ? 1 : 2);
    const onClickHandler = (Index) => {
        setIsFollowing(Index === 1 ? true : false);
        setPage(1);
        setIndex(Index);
    }
    return (
        <div style={{ backgroundColor: "#F6F7F9" }}>
            <div>
                <SectionBar index={index} onClickHandler={onClickHandler}/>
                <Suspense fallback={<Loading />}>
                    <ShowFeed />
                </Suspense>
            </div>
        </div >
    )
}

export default SectionDevide;

//const TopSection = styled.header`
//display: flex;
//flex-direction:column;
//align-items:center;
//background:#262626;
//gap: 1em;
//`

