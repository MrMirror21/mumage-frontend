import { React, Suspense } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';

import styled from 'styled-components'
import './SectionChange.css';

import Loading from '../../components/Features/Loading';
import ShowFeed from '../../components/ShowingFeed/ImageRender';
import { isfollowing, page } from '../../utils/FetchDataRecoil';
import { useState } from 'react';

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
                <Sticky>
                    <Header className="title">
                        MUMAGE
                    </Header>
                    <MenuSection className='following'>
                        <MenuSectionDetail
                            onClick={() => onClickHandler(1)}
                            style={{
                                background: index === 1 ? "#F1F1FE" : "white",
                                color: index === 1 ? "#5151C6" : "#BDBDBD",
                                pointerEvents: index === 1 ? "none" : "visible",
                            }}
                            aria-disabled={index === 1}
                        >
                            Following
                        </MenuSectionDetail>
                        <MenuSectionDetail
                            onClick={() => onClickHandler(2)}
                            style={{
                                background: index === 2 ? "#F1F1FE" : "white",
                                color: index === 2 ? "#5151C6" : "#BDBDBD",
                                pointerEvents: index === 2 ? "none" : "visible",
                            }}
                        >
                            Recommend
                        </MenuSectionDetail>
                    </MenuSection>
                </Sticky>
                <Suspense fallback={<Loading />}>
                    <ShowFeed />
                </Suspense>
            </div>
        </div >
    )
}

export default SectionDevide;



const Header = styled.header`
    color: #5151C6;
    font-size:30px;
    text-align:center;
    background: white;
`

const Sticky = styled.div`
    position:sticky;
    top:0;
`

const MenuSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
`

const MenuSectionDetail = styled.div`
    padding: 10px;

    width: 100%;
    text-align: center;
    background-color: #F1F1FE;
    border-radius: 10px;
`

//const TopSection = styled.header`
//display: flex;
//flex-direction:column;
//align-items:center;
//background:#262626;
//gap: 1em;
//`

