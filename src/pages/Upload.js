import React, { Suspense, lazy, useState } from 'react'
import styled from 'styled-components'
import { generateImage, searchMusic } from '../utils/axios'
import Loading from '../components/Loading'
import SearchBar from '../components/Upload/SearchBar'
import TrackCard from '../components/Upload/TrackCard'

const ImagePreview = lazy(() => import('../components/Upload/ImagePreview'))

const Upload = () => {
  const [imageURL, setImageURL] = useState([])
  const [generateOption, setGenerateOption] = useState({
    "prompt" : "",
    "negative_prompt": "text in the image, poor face rendering, awkward hand posture, different number of fingers",
    "samples" : 1,
  })
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState("");
  const [playData, setPlayData] = useState({
    isPlaying: false,
    currentlyPlaying: null,
  });
  const [selectedTrack, setSelectedTrack] = useState();

  const handleRadioClick = (newValue) => {
    setGenerateOption({...generateOption, "samples":newValue})
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ImagePreview imageURL={imageURL} />
      </Suspense>
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
      <SearchSection>
        <div>선택된 음악 : {selectedTrack?.name}</div>
        <SearchBar
          width="600px" 
          height="60px" 
          placeholder="검색하고 싶은 곡명을 입력해주세요."
          fontSize="1rem" 
          value={searchInput} 
          onChange={setSearchInput}
          onSubmit={()=>searchMusic(searchInput, setSearchList)}
        />
        {!!searchList[0]? searchList.map((track) => 
          <TrackCard track={track} playData={playData} setPlayData={setPlayData} setTrack={setSelectedTrack} /> ) 
          : undefined}
      </SearchSection>
    </>
  )
}

export default Upload

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

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;