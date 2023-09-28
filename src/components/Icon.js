import React from 'react'
import styled from 'styled-components';

const Icon = () => {
  return (
    <IconDiv>
      <div id="icon" className="center">뮤미지</div>
    </IconDiv>
  )
}

export default Icon

const IconDiv = styled.div`
  .center {
    text-align : center ;
  }
  #icon {
    border-bottom : 1px solid rgb(47, 47, 47);
    padding-bottom : 5px;
  }
`;