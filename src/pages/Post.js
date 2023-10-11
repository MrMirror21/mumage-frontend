import React from 'react';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';

const Post = () => {
  const {content} = useParams();

  return (

    <>
      <Icon/>
      {content}
    </>
  );
}

export default Post;