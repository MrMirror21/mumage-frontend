import React from 'react'
import styled from 'styled-components'

const component = ({generateOption, setGenerateOption}) => {
  const handleRadioClick = (newValue) => {
    setGenerateOption({...generateOption, "samples":newValue})
  }
  return (
    <>
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
    </>
  )
}

export default component

const ImageNumberSelector = styled.div``;

const SelectorBox = styled.div`
  display: flex;
  justify-content: center;
`;