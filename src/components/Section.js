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

const Button = styled.button`
  padding-top : 7px;
  width: 60px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const matchedData = FakeDataArr.filter(data => data["장르"] === sectionValue);
  const totalPage = Math.ceil(matchedData.length / itemsPerPage); 
  const displayedData = matchedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleUpPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const handleDownPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div>
      <SelectBoxContainer>
        <SelectBox onChange = {(value) => {
          setSectionValue(value);
          setCurrentPage(1);
        }} />
      </SelectBoxContainer>
      <GridContainer>
        {displayedData.map((data, index) => (
          <GridItem key={index}>{data["내용"]}</GridItem>
        ))}
      </GridContainer>
      <div>
      <Button onClick={handleDownPage} disabled={currentPage === 1}>이전</Button>
        <Button onClick={handleUpPage} disabled={currentPage === totalPage}>다음</Button>
      </div>
    </div>
  )
}

export default Section;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 10px;    
`;