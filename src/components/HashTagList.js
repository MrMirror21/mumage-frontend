import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";


const HashtagList = ({tagList, setTagList}) => {
  const handleTagClick = () => async (e) => {
    const targetVal = e.currentTarget.id;
    const newTagList = tagList.filter((tag) => tag !== targetVal);
    setTagList(newTagList);
  };

  return (
    <>
      <HashtagListContainer>
        {tagList &&
          tagList.map((tag) => (
            <>
              <HashtagOutlay>
                <HashtagContentContainer>
                  <HashtagText>{tag}</HashtagText>
                  <IconContainer onClick={handleTagClick()} id={tag}>
                    <DeleteIcon className="Icon" />
                  </IconContainer>
                </HashtagContentContainer>
              </HashtagOutlay>
            </>
          ))
        }
      </HashtagListContainer>
    </>
  )
}

export default HashtagList

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

const HashtagOutlay = styled(HashtagContainer)`
  border: 1px solid #2f80ed;

  span,
  .Icon {
    color: #2f80ed;
    fill: #2f80ed;
    stroke: #2f80ed;
  }
`;