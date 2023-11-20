import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";
import { useEffect } from "react";
import SectionDevide from "../../pages/MainPage/SectionChange";
import MyPage from "../../pages/MyPage/MyPage";

import { users } from "../../store/ServerData";
import { index, userInfo } from "../../utils/FetchDataRecoil";

import { useRecoilState, useSetRecoilState } from "recoil";


const styleEmojiPlus = {
    "width": "1.5em",
    "height": " 1.5em",
    "color": "#3385ff",
}

const PageControll = () => {
    const navigate = useNavigate();
    const [ind, setIndex] = useRecoilState(index);
    const onClickHander = (Index) => {
        setIndex(Index);
    }
    const setUser = useSetRecoilState(userInfo);

    useEffect(() => {
        setUser(users[1]);
    }, [setUser]);


    return (
        <>
            {ind === 1 ? <SectionDevide /> : <MyPage />}
            <Sticky>
                <BotNav>
                    <FirstCol onClick={() => onClickHander(1)} aria-disabled={ind === 1}>
                        <GoHome style={{
                            width: "2.4em",
                            height: "2.4em",
                            color: ind === 1 ? "#3385ff" : "BDBDBD",
                        }} />
                    </FirstCol>
                    <SecondCol onClick={() => navigate('/addPost')}>
                        <Second2Col>
                            <FaPlus style={styleEmojiPlus} />
                        </Second2Col>

                    </SecondCol>
                    <ThirdCol onClick={() => onClickHander(3)} aria-disabled={ind === 3}>
                        <FaRegUser style={{
                            width: "2em",
                            height: "2em",
                            color: ind === 3 ? "#3385ff" : "BDBDBD",
                        }} />
                    </ThirdCol>
                </BotNav>
            </Sticky>
        </>

    );
}

export default PageControll;

const BotNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
`

const Column = styled.div`
    height: 80px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[aria-disabled] {
    cursor: revert;
    transform: revert;
    }

`

const FirstCol = styled(Column)`
    border-radius: 1em;
`

const SecondCol = styled(Column)` 
    position: absolute;
    bottom: 2em;
    border-radius: 12em;
    width: 60px;
    height: 60px;
    background: linear-gradient(to left, #3385ff, #0052cc );
`

const Second2Col = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background: #FFF;
`

const ThirdCol = styled(Column)`
    border-radius: 1em;
`

const Sticky = styled.div`
    position:sticky;
    bottom:0px;
    background: white;
`