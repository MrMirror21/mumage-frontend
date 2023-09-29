import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import { generateImage } from '../utils/axios'
import Loading from '../components/Loading'


const Upload = () => {
  const [imageURL, setImageURL] = useState("")
  const [generateOption, setGenerateOption] = useState({
    "prompt" : "",
    "negative_prompt": "text in the image",
    "samples" : 1,
  })

  const handleRadioClick = (newValue) => {
    setGenerateOption({...generateOption, "samples":newValue})
  }

  return (
    <>
      <ImageSection>
        <ImageContainer>
          <Suspense fallback={<Loading />}>
            <img src={imageURL} alt="이미지 미리보기" />
          </Suspense>
        </ImageContainer>
      </ImageSection>
      <ConsoleSection>
        <ConsoleBox>
          <ImageNumberSelector>
            생성할 이미지 개수
            <SelectorBox>
              <label for="1">1</label>
              <input
                type='radio'
                name='numberOfImage'
                id='1'
                checked={generateOption.samples === 1}
                onClick={() => handleRadioClick(1)}
              />
              <label for="4">4</label>
              <input
                type='radio'
                name='numberOfImage'
                id='4'
                onClick={() => handleRadioClick(4)}
              />
              <label for="8">8</label>
              <input
                type='radio'
                name='numberOfImage'
                id='8'
                onClick={() => handleRadioClick(8)}
              />
            </SelectorBox>
          </ImageNumberSelector>
          <PromptInput 
            value={generateOption.prompt} 
            onChange={(e) => setGenerateOption({...generateOption, "prompt" : e.currentTarget.value})}
            placeholder='생성할 그림이 무엇인지 입력해주세요.'/>
          <GenerateButton onClick={() => generateImage(generateOption, setImageURL)}>이미지 생성하기</GenerateButton>
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
  display: flex;
  align-items: center;
  justify-content: center;
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

const ImageNumberSelector = styled.div``;

const SelectorBox = styled.div`
  display: flex;
  justify-content: center;
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