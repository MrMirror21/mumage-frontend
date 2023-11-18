import { React, Suspense, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil';

import Joyride, { ACTIONS, STATUS, EVENTS } from 'react-joyride';

import styled from 'styled-components'
import './SectionChange.css';

import Loading from '../../components/Features/Loading';
import ShowFeed from '../../components/ShowingFeed/ImageRender';
import { isfollowing, page } from '../../utils/FetchDataRecoil';
import { useState } from 'react';

const SectionDevide = () => {
    const [isFollowing, setIsFollowing] = useRecoilState(isfollowing);
    const setPage = useSetRecoilState(page);
    const [index, setIndex] = useState(1);

    const onClickHandler = (Index) => {
        setIsFollowing(!isFollowing);
        setPage(1);
        setIndex(Index);
    }

    const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);
    const callback = (data) => {
        const { action, index, type, status } = data;
        if (action === ACTIONS.CLOSE || (status === STATUS.SKIPPED && tourState.run) || status === STATUS.FINISHED) {
            dispatch({ type: "STOP" });
        } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
            dispatch({
                type: "NEXT_OR_PREV",
                payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
            });
        }
    };
    const startTour = () => {
        dispatch({ type: "RESTART" });
    };

    return (
        <div style={{ backgroundColor: "#F6F7F9" }}>
            <button onClick={startTour}>Start Tour</button>
            <Joyride
                styles={{
                    options: {
                        arrowColor: "#262626",
                        backgroundColor: "#262626",
                        primaryColor: "#FFF",
                        textColor: "#FFFFFF",
                    },
                    tooltipContainer: {
                        textAlign: "center",
                    },
                    buttonNext: {
                        backgroundColor: "#404040"
                    },
                    buttonBack: {
                        marginRight: 10
                    }
                }}
                {...tourState}
                callback={callback}
                showProgress={true}
                showSkipButton={true}
                locale={{
                    last: "done",
                    back: "back",
                    next: "next",
                    skip: "skip",
                }}

            />
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
        </div>
    )
}

export default SectionDevide;

const steps = [
    {
        target: ".title",
        content: "우리의 로고에요!",
        disableBeacon: true,
    },
    {
        target: ".following",
        content: "클릭시 추천이미지를 보여줘요!",
    },
    {
        target: ".image",
        content: "이미지 & 클릭시 상세페이지 이동",
    },
    {
        target: ".pagination",
        content: "페이지를 이동할 수 있어요!"
    },
];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "START":
            return { ...state, stepIndex: 0 };
        case "RESET":
            return { ...state, stepIndex: 0 };
        case "STOP":
            return { ...state, run: false };
        case "NEXT_OR_PREV":
            return { ...state, ...action.payload };
        case "RESTART":
            return {
                ...state,
                stepIndex: 0,
                run: true,
                loading: false,
                key: new Date()
            };
        default:
            return state;
    }
}

const INITIAL_STATE = {
    run: false,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: steps,
    key: new Date(),
};


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

