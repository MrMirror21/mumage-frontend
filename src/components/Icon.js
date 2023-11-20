import React from 'react'
import styled from 'styled-components';

const Icon = () => {
  return (
    <IconDiv>
      <div>MUMAGE</div>
    </IconDiv>
  )
}

export default Icon

const IconDiv = styled.div`
  text-align: center;
  padding-bottom: 5px;
  margin: 16px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  color: transparent;
  background: linear-gradient(271deg, #888BF4 0%, #5151C6 100%);
  -webkit-background-clip: text;
  position: relative;

  &::before {
    content: 'MUMAGE';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4px;
    text-shadow: 
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
    z-index: -1;
  }
`;
