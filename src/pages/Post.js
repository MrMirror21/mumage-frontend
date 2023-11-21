import React, { useState, useRef } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import '../styles/Post.css'
import Icon from '../components/Icon';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {postsDataState} from '../store/ServerData';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faUser, faPlay, faStop} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useRecoilValue } from 'recoil';

export const AudioPreview = ({ trackUrl }) => {
  const [playData, setPlayData] = useState({ isPlaying: false, currentlyPlaying: null });
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (playData.currentlyPlaying) {
      playData.currentlyPlaying.current.pause();
    }
    audioRef.current.play();
    setPlayData({ isPlaying: true, currentlyPlaying: audioRef });
  };

  const togglePause = () => {
    if (playData.currentlyPlaying) {
      playData.currentlyPlaying.current.pause();
      setPlayData({ isPlaying: false, currentlyPlaying: null });
    }
  };

  return (
    <div>
      <button style={{ backgroundColor: 'white', border: 'none', width: '100%' }} onClick={playData.isPlaying ? togglePause : togglePlay}>
        {playData.isPlaying ? <FontAwesomeIcon className="audio" icon={faStop} style={{ backgroundColor: 'white', fontSize: '20px' }} /> : <FontAwesomeIcon className="audio" icon={faPlay} style={{ backgroundColor: 'white', fontSize: '20px' }} />}
      </button>
      <audio ref={audioRef}>
        <source src={trackUrl} />
      </audio>
    </div>
  );
};

export const GridItem = styled.div`
  aspect-ratio: 1 / 1;
  position : relative;
  img {
    position : absolute;
    width : 100%;
    height : 100%,
    object-fit : cover;
  }
`;

const Post = () => {
  const {postId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const postDetails = useRecoilValue(postsDataState);
  const postData = postDetails.find(data => data["postId"] === parseInt(postId, 10));


  const currentPage = location.state?.currentPage; 
  const sectionValue = location.state?.sectionValue;
  const order = location.state?.order;

  const goBackWithState = () => {
    navigate(-1, {state : {currentPage, sectionValue, order}});
  }

  return (

    <>
      <Icon/>
      <div className="arrow-left-menu">
        <button id="arrow-left-icon" onClick={goBackWithState}><FontAwesomeIcon icon={faArrowLeft} style = {{backgroundColor:'white', fontSize:'20px'}} /></button>
        <button id="like"><FontAwesomeIcon id="like-num-icon" icon={faHeartRegular} style={{ backgroundColor: 'white', fontSize: '20px' }} /></button>
      </div>
      <div id="User">
        <FontAwesomeIcon id="user-icon"icon={faUser} style={{ backgroundColor: 'white', fontSize: '20px' }} />
        <div id="user">{postData["nickname"]}</div>
      </div>
      <SelectGridContainer>
        <GridItem><img src={postData["imageUrl"]}></img></GridItem>
      </SelectGridContainer>
      <AudioPreview trackUrl={postData["trackUrl"]} />
      <div className='like-num-menu'>
        <div id="likeNum" >
          <div id="like-num">{postData["liked"]}</div>
          <FontAwesomeIcon id="like-num-icon"icon={faHeartRegular} style = {{backgroundColor:'white', fontSize:'20px'}} />
        </div>
      </div>
      <div id="text">
        <div id="title">{postData["title"]}</div>
        <div id="artist">{postData["artist"]}</div>
        <div id="context">{postData["context"]}</div>
      </div>
    </>
  );
}

export default Post;

const SelectGridContainer = styled.div`
  margin: 0; 
`;