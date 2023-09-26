import {React, useState, Suspense} from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import './SectionChange.css';

import Loading from '../components/Features/Loading';
import ShowFeed from '../components/ShowingFeed/ImageRender';


const SectionDevide = () => {
    const [isFollowing, setIsFollowing] = useState(true);

    const onClickHandler = () => {
        setIsFollowing(!isFollowing);
    }

    return ( 
        <>
            <div>
                <Header>MUMAGE</Header>

                <LoginSection>
                    <Link className= 'forLink' to='/Login'>Login</Link>
                    <Link className= 'forLink' to='/signup'>Signup</Link>
                </LoginSection>
                
                <Suspense fallback={<Loading />}>
                    <Menu onClick={() => onClickHandler()}>
                        {isFollowing ? "Following" : "Recommend"}
                    </Menu>
                    
                    <ShowFeed isFollowing={isFollowing} />
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
`
const LoginSection = styled.div`
    display:flex;
    flex-direction:row;
    border:none;
    justify-content:right;
    border-radius:15px;
    background:#262626
`



//const TopSection = styled.header`
//display: flex;
//flex-direction:column;
//align-items:center;
//background:#262626;
//gap: 1em;
//`


