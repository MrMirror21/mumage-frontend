import React, { lazy, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateImage, getLyrics, searchMusic } from '../utils/axios'
import SearchBar from '../components/Upload/SearchBar'
import TrackCard from '../components/Upload/TrackCard'

const ImagePreview = lazy(() => import('../components/Upload/ImagePreview'))

const Upload = () => {
  const [currentStep, setCurrentStep] = useState("music");
  const [imageURL, setImageURL] = useState([])
  const [generateOption, setGenerateOption] = useState({
    "prompt" : "",
    "negative_prompt": "bad anatomy, distortion, low quality, low contrast, draft, amateur, cut off, frame, ugly face, text, letter, watermark, poor face rendering, awkward hand posture, different number of fingers",
    "samples" : 4,
  })
  const [postData, setPostData] = useState({
    "postId": 0,
    "userId": 0,
    "nickname": "",
    "genre": [],
    "title": "",
    "artist": "",
    "trackUrl": "",
    "externalUrl" : "",
    "imageUrl": "",
    "context": "",
    "liked": 0,
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState("");
  const [playData, setPlayData] = useState({
    isPlaying: false,
    currentlyPlaying: null,
  });
  const [selectedTrack, setSelectedTrack] = useState();


  return (
    <>
      <Link to='/'><Header>MUMAGE</Header></Link>
      <Wrapper>
        {currentStep === "music" ? 
          <SearchSection>
            <StepTitle>이미지를 생성할 곡을 선택해주세요.</StepTitle>
            {selectedTrack && <div>선택된 음악 : {selectedTrack?.name} : {selectedTrack?.album.artists[0].name}</div>}
            {selectedTrack && <div>{selectedTrack.external_urls.spotify}</div>}
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
            <ChooseSongButton onClick={()=>setCurrentStep("image")}>곡 선택 완료</ChooseSongButton>
          </SearchSection>            
        :
        <ImageSection>
          <ImagePreview imageURL={imageURL} postData={postData} setImage={setPostData}/>
          <ConsoleSection>
            <ConsoleBox>
              {selectedTrack && <div>선택된 음악 : {selectedTrack?.name} : {selectedTrack?.album.artists[0].name}</div>}
              <PromptInput 
                value={generateOption.prompt} 
                onChange={(e) => setGenerateOption({...generateOption, "prompt" : e.currentTarget.value})}
                placeholder='생성할 그림이 무엇인지 입력해주세요.'/>
              <ButtonSection>
                <PrevButton onClick={()=>setCurrentStep("music")}>이전으로</PrevButton>
                <GenerateButton onClick={() => generateImage(generateOption, setImageURL)}>이미지 생성하기</GenerateButton>
                {imageURL.length === 0 ? 
                  <GenerateLyricsButton onClick={()=>getLyrics(selectedTrack.id, generateOption, setImageURL, setGenerateOption)}>프롬프트 생성</GenerateLyricsButton>
                  : <RegenerateButton onClick={()=>generateImage(generateOption, setImageURL)}>재생성하기</RegenerateButton>
                }
              </ButtonSection>
            </ConsoleBox>
          </ConsoleSection>
        </ImageSection>
        }
      <LyricsSection>
      </LyricsSection>
      </Wrapper>
    </>
  )
}

export default Upload

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
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

const ImageSection = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F1F1FE;
`;

const LyricsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GenerateLyricsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 100px;
  height: 50px;
  width: 140px;
  box-sizing: border-box;
  font-family: Pretendard;
  background: var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%));

  margin-top: 1.5rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: var(--Primary, linear-gradient(91deg, #888BF4 0%, #5151C6 100%));
    transition: all 0.5s ease 0s;
  }
`;

const PrevButton = styled(GenerateLyricsButton)``;

const RegenerateButton = styled(GenerateLyricsButton)``;

const ConsoleSection = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ConsoleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const PromptInput = styled.input`
  width: 500px;
  border: none;
  border-bottom: 1px solid;
  font-family: Pretendard;
  font-size: 1rem;
  margin: 1rem;
  outline: none;
  background: #F1F1FE;
`;

const ButtonSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  margin: 1rem;
`;

const StepTitle = styled.div`
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 500;
  padding-bottom: 10px;
`;

const ChooseSongButton = styled(GenerateLyricsButton)``;