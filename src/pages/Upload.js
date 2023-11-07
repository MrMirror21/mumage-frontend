import React, { Suspense, lazy, useState } from 'react'
import styled from 'styled-components'
import { generateImage, searchMusic } from '../utils/axios'
import Loading from '../components/Loading'
import SearchBar from '../components/Upload/SearchBar'
import TrackCard from '../components/Upload/TrackCard'
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

const ImagePreview = lazy(() => import('../components/Upload/ImagePreview'))

const Upload = () => {
  const [imageURL, setImageURL] = useState([])
  const [generateOption, setGenerateOption] = useState({
    "prompt" : "",
    "negative_prompt": "text in the image, poor face rendering, awkward hand posture, different number of fingers",
    "samples" : 1,
    "return_type" : "base64_string"
  })
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState("");
  const [playData, setPlayData] = useState({
    isPlaying: false,
    currentlyPlaying: null,
  });
  const [selectedTrack, setSelectedTrack] = useState();

  const [hashtag, setHashtag] = useState("");
  const [hashtagList, setHashtagList] = useState([]);

  const handleInput = () => async (event) => {
    const targetValue = event.currentTarget.value;
    setHashtag(targetValue);
}

const handleSubmitTag = async (val) => {
  const regExpTag = /^#([\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|]{1,15})/g;
  const targetVal = val.replace(/\s/gi, "");
  let newTagList = hashtagList;
  console.log(hashtagList);
  if (targetVal !== "") {
    const newTag = targetVal.substring(1);
    regExpTag.test(targetVal) &&
      (newTagList = await hashtagList.concat(newTag));
  }
  setHashtagList(newTagList);
};

const onCheckEnter = async (e) => {
  const targetVal = e.currentTarget.value;
  if (e.key === "Enter" && hashtagList.length < 3) {
    e.preventDefault();
    handleSubmitTag(targetVal);
    setHashtag("");
  }
};

const handleTagClick = () => async (e) => {
  const targetVal = e.currentTarget.id;
  const newTagList = hashtagList.filter((tag) => tag !== targetVal);
  setHashtagList(newTagList);
};

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
        <div>선택된 음악 : {selectedTrack?.name} : {selectedTrack?.album.artists[0].name}</div>
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
      <TagSection>
      <HashtagInputContainer>
          <Input
            type="hashtag"
            value={hashtag}
            onChange={handleInput("hashtag")}
            onKeyPress={onCheckEnter}
            placeholder="#태그 입력 후 Enter"
            required
          />
        </HashtagInputContainer>
        <HashtagListContainer>
          {hashtagList &&
            hashtagList.map((tag) => (
              <>
                <ProjectHashtagContainer>
                  <HashtagContentContainer>
                    <HashtagText>{tag}</HashtagText>
                    <IconContainer onClick={handleTagClick()} id={tag}>
                      <DeleteIcon className="Icon" />
                    </IconContainer>
                  </HashtagContentContainer>
                </ProjectHashtagContainer>
              </>
            ))}
        </HashtagListContainer>
      </TagSection>
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
  padding-top: 10px;
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

const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HashtagInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-top: 16px;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

export const HashtagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 460px;
  padding: 0;
`;

export const HashtagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #8b8b8b;
`;

export const IconContainer = styled.div`
  background: none;
  line-height: 9px;
  .Icon {
    width: 12px;
    height: 12px;
    fill: #8b8b8b;
    stroke: #8b8b8b;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  position: static;
  height: 36px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 16px;
  line-height: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 10px 0px 0px;
`;

const ProjectHashtagContainer = styled(HashtagContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  position: static;
  height: 36px;

  border: 1px solid #7054ff;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 16px;
  line-height: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 10px 0px 0px;
  span,
  .Icon {
    color: #7054ff;
    fill: #7054ff;
    stroke: #7054ff;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 100px;
  width: 330px;
  height: 50px;
  margin-right: 20px;
  font-family: Pretendard;
  font-size: 18px;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
`;