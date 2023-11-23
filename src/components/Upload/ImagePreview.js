import React from 'react'
import styled from 'styled-components'
import Image3dIcon from "../../assets/3dImage.jpg"


const ImagePreview = ({imageURL, postData, setImage}) => {
  return (
  <>
    <ImageSection>
      <ImageContainer>
        {imageURL.length === 0 ?
        <IconContainer>
          <ImageIcon src={Image3dIcon} />
        </IconContainer> 
        :
        imageURL.map((image) => 
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
    border-radius : 10px;
  }
  .selected {
    background: #888BF4;
  }
`;

const IconContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageIcon = styled.img`
  width: 500px;
  margin-top: 100px;
  background: #313338;
  border-radius: 20px;
`;

const GridItem = styled.div`
  border-radius: 10px;
`;