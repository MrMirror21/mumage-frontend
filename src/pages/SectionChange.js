import {React, useState, Suspense,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
    
    return ( 
        <>
            <div>
                <Sticky>
                    <Header>MUMAGE</Header>

                    <LoginSection>
                        <Link className= 'forLink' to='/Login'>Login</Link>
                        <Link className= 'forLink' to='/signup'>Signup</Link>
                    </LoginSection>
                </Sticky>
                
                <Suspense fallback={<Loading />}>
                    <Menu onClick={() => onClickHandler()}>
                        {isFollowing ? "Following" : "Recommend"}
                    </Menu>
                    
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


