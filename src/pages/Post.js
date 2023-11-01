import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import Icon from '../components/Icon';
import {GridItem, Button} from '../components/Section';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Post = () => {
  const {content} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.state?.currentPage; 
  const sectionValue = location.state?.sectionValue;
  const order = location.state?.order;

  const goBackWithState = () => {
    navigate(-1, {state : {currentPage, sectionValue, order}});
  }

  return (

    <>
      <Icon/>
      <Button onClick={goBackWithState}>&lt;&lt;</Button>
      <SelectGridContainer>
        <GridItem>{content}</GridItem>
      </SelectGridContainer>
    </>
  );
}

export default Post;

const SelectGridContainer = styled.div`
  margin: 16px; 
`;