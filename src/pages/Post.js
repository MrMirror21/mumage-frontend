import React from 'react';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';
import {GridItem, Button} from '../components/Section';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Post = () => {
  const {content} = useParams();
  const navigate = useNavigate();
  return (

    <>
      <Icon/>
      <Button onClick={() => navigate(-1)}>&lt;&lt;</Button>
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