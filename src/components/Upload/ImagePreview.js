import React from 'react'
import styled from 'styled-components'

const ImagePreview = ({imageURL}) => {
  return (
    <>
    <ImageSection>
      <ImageContainer>
        <img src={imageURL} alt="이미지 미리보기" />
      </ImageContainer>
    </ImageSection>
  </>
  )
}

export default ImagePreview

const ImageSection = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 512px;
  height: 512px;
  background: #f1f1f1;
`;