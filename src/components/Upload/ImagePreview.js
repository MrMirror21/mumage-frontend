import React from 'react'
import styled from 'styled-components'

const ImagePreview = ({imageURL}) => {
  return (
  <>
    <ImageSection>
      <ImageContainer>
        {imageURL.map((image) => <img src={image} alt="이미지 미리보기" />)}
      </ImageContainer>
    </ImageSection>
  </>
  )
}

export default ImagePreview

const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`;