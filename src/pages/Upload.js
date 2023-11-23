import React, { lazy, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { generateImage, getGenre, getLyrics, searchMusic } from '../utils/axios'
import SearchBar from '../components/Upload/SearchBar'
import TrackCard from '../components/Upload/TrackCard'
import { useRecoilState } from 'recoil'
import { postsDataState } from '../store/ServerData'
import Icon from '../components/Icon'

const ImagePreview = lazy(() => import('../components/Upload/ImagePreview'))

const Upload = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("music");
  const [imageURL, setImageURL] = useState([])
  const [posts, setPosts] = useRecoilState(postsDataState);
  const [generateOption, setGenerateOption] = useState({
    "prompt" : "",
    "negative_prompt": "bad anatomy, distortion, low quality, low contrast, draft, amateur, cut off, frame, ugly face, text, letter, watermark, poor face rendering, awkward hand posture, different number of fingers",
    "samples" : 4,
  })
  const [selectedTrack, setSelectedTrack] = useState();
  const [postData, setPostData] = useState({
    "postId": posts[0].length + 1,
    "userId": 2,
    "nickname": "팔레트",
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

const handleChooseTrack = (selectedTrack) => {
  getGenre(selectedTrack?.album.artists[0].id, postData, setPostData);
  setPostData({...postData, 
    "title": selectedTrack.name, 
    "artist" : selectedTrack.album.artists[0].name, 
    "trackUrl" : selectedTrack.preview_url,
    "externalUrl" : selectedTrack?.external_urls.spotify,})
  setCurrentStep("image");
}

const handleUpload = async () => {
  console.log(postData)
  setPosts([...posts, postData])
  alert("업로드가 완료되었습니다.")
  navigate("/")
}

  return (
    <>
      <HeaderWrapper>
        <Link to='/'><Icon /></Link>
      </HeaderWrapper>
      <Wrapper>
        {currentStep === "music" &&
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
            <ChooseSongButton onClick={()=>handleChooseTrack(selectedTrack)}>곡 선택 완료</ChooseSongButton>
          </SearchSection>            
        }
        {currentStep === "image" && 
        <ImageSection>
          <ImagePreview imageURL={imageURL} postData={postData} setImage={setPostData}/>
          <ConsoleSection>
            <ConsoleBox>
              {selectedTrack && <div>선택된 음악 : {selectedTrack?.name} : {selectedTrack?.album.artists[0].name}</div>}
              <PromptInput 
                value={postData.context} 
                onChange={(e) => setPostData({...postData, "context" : e.currentTarget.value})}
                placeholder='생성할 그림이 무엇인지 입력해주세요.'/>
              <ButtonSection>
                <PrevButton onClick={()=>setCurrentStep("music")}>이전으로</PrevButton>
                {/**<GenerateButton onClick={() => generateImage(generateOption, setImageURL)}>이미지 생성하기</GenerateButton>**/}
                {imageURL.length === 0 ? 
                  <GenerateLyricsButton onClick={()=>getLyrics(selectedTrack.id, generateOption, setImageURL, setGenerateOption)}>이미지 생성하기</GenerateLyricsButton>
                  : <RegenerateButton onClick={()=>generateImage(generateOption, setImageURL)}>재생성하기</RegenerateButton>
                }
                <UploadButton onClick={()=>handleUpload()}>업로드</UploadButton>
              </ButtonSection>
            </ConsoleBox>
          </ConsoleSection>
        </ImageSection>
        }
        {currentStep === "post" && 
        <PostSection>
          
        </PostSection>
        }
      </Wrapper>
    </>
  )
}

export default Upload

const HeaderWrapper = styled.div`
  background: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ImageSection = styled.div`
  width: 100vw;
  height: 100vh;
  background: #F1F1FE;
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
  margin : 10px;
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

const UploadButton = styled(GenerateLyricsButton)``;

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

const PostSection = styled.div``;