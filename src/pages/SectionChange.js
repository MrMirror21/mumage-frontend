import {React, useState, useEffect,useRef,Suspense} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../Extra/Pagination';
import '../SectionChange.css';

import Loading from '../Extra/Loading';


const SectionDevide = () => {
    const [isFollowing, setIsFollowing] = useState(true);
    const [imgUrl, setImgUrl] = useState([]);
    const [page, setPage] = useState(1);

    const onClickHandler = () => {
        setIsFollowing(!isFollowing);
    }

    const offset = (page - 1) * 10;

    const isRendered = useRef(false);
    useEffect(() => {
        if (!isRendered.current) {
            fetch('https://picsum.photos/v2/list?page=2&limit=100')
            .then(response => response.json())
            .then(result => setImgUrl(result));
        }
    },[]);


    return ( 
        <>
            <div>
                <Header>MUMAGE</Header>
                <LoginSection>
                    <Link className= 'forLink' to='/Login'>Login</Link>
                    <Link className= 'forLink' to='/signup'>Signup</Link>
                </LoginSection>
                <Menu onClick={onClickHandler}>
                    {isFollowing ? <>Following</> : <>Recommend</>}
                </Menu>
                <Suspense fallback={<Loading />}>
                    <Feed>
                        {imgUrl.slice(offset, offset + 10).map(img => {
                            return (
                            <Img src={img.download_url} key={img.id} alt='icon' />
                            )
                        })}
                    </Feed>
                </Suspense>
                <footer>
                    <Pagination
                    total={imgUrl.length}
                    limit={10}
                    page={page}
                    setPage={setPage}
                />
                </footer>
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

const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 1.5px solid #262626;
    border-radius: 8px;
    margin-bottom: 2em;
`

const Feed = styled.div `
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:5em;
    margin-left: 6em;
`

//const TopSection = styled.header`
//display: flex;
//flex-direction:column;
//align-items:center;
//background:#262626;
//gap: 1em;
//`


