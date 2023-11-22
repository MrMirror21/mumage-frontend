import React from 'react'
import styled from 'styled-components'

const ImagePreview = ({imageURL, postData, setImage}) => {
  return (
  <>
    <ImageSection>
      <ImageContainer>
        {imageURL.map((image) => 
        <GridItem className={postData.imageUrl === image ? " selected" : ""}
        >
          <img 
            src={image} 
            className={postData.imageUrl === image ? "image selected" : "image"}
            alt="이미지 미리보기" 
            onClick={()=>setImage({...postData, "imageUrl" : image})}/>          
        </GridItem>        
        )}
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
  height: 700px;

`;

const ImageContainer = styled.div`
  display: grid;
  width: 700px;
  height: 600px;
  grid-template-columns : 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  place-items: center;
  .image{
    width: 300px;
    margin: 10px;
    object-fit: fill;
  }
  .selected {
    background: #888BF4;
  }
`;

const GridItem = styled.div`
  border-radius: 10px;
`;