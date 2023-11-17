import { Link } from "react-router-dom";
import { GoHomeFill, GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";
import { useState } from "react";
const styleEmoji = {
    "width": "2em",
    "height": " 2em",
    "color": "#BDBDBD",
}

const styleEmojiPlus = {
    "width": "1.5em",
    "height": " 1.5em",
    "color": "#3385ff",
}

const BottomNavBar = () => {
    const [firstCol, setFirstCol] = useState(<GoHome style={styleEmoji} />);
    const onClickHander = () => {

    }
    return (
        <Sticky>
            <BotNav>
                <FirstCol onClick={onClickHander} aria-disabled={true}>
                    <GoHome style={styleEmoji} />
                </FirstCol>
                <SecondCol>
                    <Second2Col>
                        <FaPlus style={styleEmojiPlus} />
                    </Second2Col>

                </SecondCol>
                <ThirdCol>
                    <FaRegUser style={styleEmoji} />
                </ThirdCol>
            </BotNav>
        </Sticky>
    );
}

export default BottomNavBar;

const BotNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    width: 100%;
    height: 80px;
    flex-shrink: 0;
`

const Column = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
    background: linear-gradient(to left, #3385ff, #0052cc );
    cursor: pointer;
    }

    &[disabled] {
    background: #404040;
    cursor: revert;
    transform: revert;
    }

    &[aria-current] {
        background: #404040;
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`

const FirstCol = styled(Column)`
    border-radius: 1em;
`

const SecondCol = styled(Column)` 
    border-radius: 12em;
    width: 80px;
    background: linear-gradient(to left, #3385ff, #0052cc );
`

const Second2Col = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 2.5em;
    height: 2.5em;
    border-radius: 1em;
    background: #FFF;
`

const ThirdCol = styled(Column)`
    border-radius: 1em;
`

const Sticky = styled.div`
    position:sticky;
    bottom:0;
    background: white;
`