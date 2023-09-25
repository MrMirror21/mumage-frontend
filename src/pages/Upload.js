import React, { useState } from 'react'
import styled from 'styled-components'
import { generateImage } from '../utils/axios'

const Upload = () => {
  const [prompt, setPrompt] = useState("")
  const [imageURL, setImageURL] = useState("")

  return (
    <>
      <ImageSection>
        <ImageContainer>
        {imageURL && <img src={imageURL} alt="이미지 미리보기" />}
        </ImageContainer>
      </ImageSection>
      <ConsoleSection>
        <ConsoleBox>
          <PromptInput value={prompt} onChange={(e) => setPrompt(e.currentTarget.value)} placeholder='생성할 그림이 무엇인지 입력해주세요.'/>
          <GenerateButton onClick={() => generateImage(prompt, "text in the image", setImageURL)}>이미지 생성하기</GenerateButton>
        </ConsoleBox>
      </ConsoleSection> 
    </>
  )
}

export default Upload
const ImageSection = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 512px;
  height: 512px;
  background: #f1f1f1;
`;

const ConsoleSection = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ConsoleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PromptInput = styled.input`
  width: 500px;
  border: none;
  border-bottom: 1px solid;
  font-family: Pretendard;
  font-size: 1rem;
  margin: 1rem;
  outline: none;
`;
const GenerateButton = styled.button`
  height: 64px;
  width: 150px;
  background: #7054ff;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 100px;
`;