import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import '../styles/Post.css'
import Icon from '../components/Icon';
import {GridItem, Button} from '../components/Section';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {FakeDataArr} from '../store/FakeDataArr';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  const {postId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.state?.currentPage; 
  const sectionValue = location.state?.sectionValue;
  const order = location.state?.order;

  const postData = FakeDataArr.find(data => data["postId"] === parseInt(postId, 10));

  const goBackWithState = () => {
    navigate(-1, {state : {currentPage, sectionValue, order}});
  }

  return (

    <>
      <Icon/>
      <div className="arrow-left-menu">
        <button id="arrow-left-icon" onClick={goBackWithState}><FontAwesomeIcon icon={faArrowLeft} style = {{backgroundColor:'white', fontSize:'20px'}} /></button>
        <button id="like"><FontAwesomeIcon icon={faHeart} style = {{backgroundColor:'white', fontSize:'20px'}} /></button>
      </div>
      <SelectGridContainer>
        <GridItem><img src={postData["imageUrl"]}></img></GridItem>
      </SelectGridContainer>
    </>
  );
}

export default Post;

const SelectGridContainer = styled.div`
  margin: 16px; 
`;