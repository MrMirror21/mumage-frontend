import React, {useState} from 'react'
import SelectBox from './SelectBox'
import {FakeDataArr} from '../store/FakeDataArr'
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 5px; 
  padding: 5px; 
`;

const GridItem = styled.div`
  background-color: black; 
  color: white;
  padding: 50px;
  text-align: center;
  border: 6px solid red;
  aspect-ratio: 1 / 1;
`;

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');

  const matchedData = FakeDataArr.filter(data => data["장르"] === sectionValue);

  return (
    <div>
      <SelectBoxContainer>
        <SelectBox onChange = {(value) => setSectionValue(value)} />
      </SelectBoxContainer>
      <GridContainer>
        {matchedData.map((data, index) => (
          <GridItem key={index}>{data["내용"]}</GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default Section;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 10px;    
`;
