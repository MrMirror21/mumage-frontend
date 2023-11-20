import { useState, useEffect } from "react";

import styled from 'styled-components'
import Profile from '../../components/UserInfo/profile';
import MyFeed from '../../components/UserInfo/myFeed';


const MyPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [gridColumns, setGridColumns] = useState(3);
    const [width, setWidth] = useState("0%");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth >= 1000) {
            setGridColumns(5);
            setWidth("25%");
        } else if (windowWidth >= 700 && windowWidth < 1000) {
            setGridColumns(3)
            setWidth("35%");
        }
        else {
            setGridColumns(2);
            setWidth("45%");
        }
    }, [windowWidth]);


    return (
        <Frame>
            <Profile width={width} />
            <MyFeed gridColumns={gridColumns} />
        </Frame>
    );
}

export default MyPage;


const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    
`