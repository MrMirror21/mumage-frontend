import React from 'react';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';
import {GridItem} from '../components/Section';
import styled from 'styled-components';

const Post = () => {
  const {content} = useParams();

  return (

    <>
      <Icon/>
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