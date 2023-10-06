import {React, useState, Suspense,useEffect, useReducer} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Joyride, { ACTIONS,STATUS,EVENTS } from 'react-joyride';

import styled from 'styled-components'
import './SectionChange.css';

import Loading from '../components/Features/Loading';
import ShowFeed from '../components/ShowingFeed/ImageRender';


const SectionDevide = () => {
    const [isFollowing, setIsFollowing] = useState(true);
    const [isChanged, setIsChanged] = useState(false);
    const location = useLocation();
    
    const onClickHandler = () => {
        setIsFollowing(!isFollowing);
        setIsChanged(true);
    }

    useEffect(() => {
        if (location.state != null) {
            setIsFollowing(location.state.follow);
        }
        setIsChanged(false);
    },[location.state])

    const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);
    const callback = (data) => {
        const {action, index, type, status} = data;
        if (action === ACTIONS.CLOSE || (status === STATUS.SKIPPED && tourState.run)|| status === STATUS.FINISHED) {
            dispatch({type:"STOP"});
        } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
            dispatch({
                type: "NEXT_OR_PREV",
                payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
            });
        }
    };
    const startTour = () => {
        dispatch({ type: "RESTART"});
    };

    return ( 
        <>
            <button onClick={startTour}>Start Tour</button>
            <Joyride 
                styles={{
                    options: {
                        arrowColor: "#262626",
                        backgroundColor: "#262626",
                        primaryColor:"#FFF",
                        textColor:"#FFFFFF",
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
                <Header className="title">MUMAGE</Header>
                <LoginSection>
                    <Link className= 'forLink' to='/Login'>Login</Link>
                    <Link className= 'forLink' to='/signup'>Signup</Link>
                </LoginSection>
                
                </Sticky>
                <Menu className="following" onClick={() => onClickHandler()}>
                    {isFollowing ? "Following" : "Recommend"}
                </Menu>
                <Suspense fallback={<Loading />}>  
                    <ShowFeed
                        isFollowing={isFollowing} 
                        pageNum={location.state != null ? location.state.pageNum : null} 
                        isChanged={isChanged}
                    />
                </Suspense>
            </div>
        </>
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
            return {...state, stepIndex:0 };
        case "RESET":
            return {...state, stepIndex:0};
        case "STOP":
            return {...state, run: false};
        case "NEXT_OR_PREV":
            return {...state, ...action.payload};
        case "RESTART":
            return {
                ...state,
                stepIndex:0,
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

const Menu = styled.button`
    width:100px;
    padding: 10px;
    float:right;
    position:relative;
    left: -47%;
    border:none;
    font-size: 0.8em;
    margin-top: 1.5em;
    border-radius:15px;
    background:#262626;
    color: white;
    
`

const Header = styled.header`
    font-size:50px;
    text-align:center;
    background: white;
    border-radius: 1em;
`

const LoginSection = styled.div`
    display:flex;
    flex-direction:row;
    border:none;
    justify-content:right;
    border-radius:15px;
    background:#262626
`

const Sticky = styled.div `
    position:sticky;
    top:0;
`



//const TopSection = styled.header`
//display: flex;
//flex-direction:column;
//align-items:center;
//background:#262626;
//gap: 1em;
//`


