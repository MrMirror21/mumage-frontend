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
  text-align : center;
  padding-bottom : 5px;
  margin:16px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
`;