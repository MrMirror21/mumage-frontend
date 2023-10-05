import React, {useState, useEffect} from 'react'
import SelectBox from './SelectBox'
import {FakeDataArr} from '../store/FakeDataArr'
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 5px; 
  padding: 5px; 

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr)
  }
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

const PageButton = styled(Button)``;

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const matchedData = FakeDataArr.filter(data => data["장르"] === sectionValue);
  const totalPage = Math.ceil(matchedData.length / itemsPerPage); 
  const displayedData = matchedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 800) {
      setItemsPerPage(10);
    } else {
      setItemsPerPage(9);
    }
  }, [windowWidth]);

  const handleUpPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const handleDownPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleChangePage = (page) => {
    setCurrentPage(page);
  }

  const getPageNumbers = () => {
    let pages = [];
    let startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    let endPage = Math.min(startPage + 4, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
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
        <Button onClick={handleDownPage} disabled={currentPage === 1}>&lt;</Button>
        {getPageNumbers().map(number => (
          <PageButton
            key={number}
            onClick={() => handleChangePage(number)}
            disabled={currentPage === number}
          >
          {number}
          </PageButton>
        ))}
        <Button onClick={handleUpPage} disabled={currentPage === totalPage}>&gt;</Button>
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