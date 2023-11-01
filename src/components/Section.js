import React, {useState, useEffect} from 'react'
import SelectBox from './SelectBox'
import {FakeDataArr} from '../store/FakeDataArr'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { currentPageState, sectionValueState, orderState } from '../utils/DataRecoilState';
import {useRecoilState} from 'recoil';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 5px; 
  padding: 5px;
  margin : 16px; 
`;

export const GridItem = styled.div`
  border: 6px solid black;
  aspect-ratio: 1 / 1;
  position : relative;
  img {
    position : absolute;
    width : 100%;
    height : 100%,
    object-fit : cover;
  }
`;

export const Button = styled.button`
border: none;
padding: 8px;
margin: 0;
background: #262626;
color: white;
font-size: 0.5rem;
`;

const PageButton = styled(Button)`

`;

const Section = () => {
  const [sectionValue, setSectionValue] = useRecoilState(sectionValueState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [order, setOrder] = useRecoilState(orderState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [gridColumns, setGridColumns] = useState(3)
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const matchedData = FakeDataArr.filter(data => data["장르"] === sectionValue);
  const sortedData = matchedData.sort((a, b) => {
    if (order == 'likes') {
      return b["좋아요"] - a["좋아요"];
    }
    return 0;
  })
  const totalPage = Math.ceil(sortedData.length / itemsPerPage); 
  const displayedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 800) {
      setGridColumns(5);
      setItemsPerPage(10);
    } else {
      setGridColumns(3);
      setItemsPerPage(3*3);
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

  const handleGridChange = (cols, itemsPerPage) => {
    if (gridColumns !== cols) {
      setGridColumns(cols);
      setItemsPerPage(itemsPerPage);
    }
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

  const isWindowWidthGreaterThan =() => {
    let width = 800;
    return windowWidth >= width;
  }

  return (
    <div>
      <SelectBoxContainer>
        <SelectBox onChange = {(value) => {
          setSectionValue(value);
          setCurrentPage(1);
        }} />
      </SelectBoxContainer>
      <SelectOrderContainer>
        <Button onClick = {() => setOrder("default")}>최신</Button>
        <Button onClick = {() => setOrder("likes")}>트렌딩</Button>
      </SelectOrderContainer>
      <SelectGridContainer>
        <Button onClick = {() => handleGridChange(3, 3 * 3)} style = {{display : isWindowWidthGreaterThan() ? 'none' : 'block'}} disabled={gridColumns===3}>3X3</Button>
        <Button onClick = {() => handleGridChange(4, 4 * 4)} style = {{display : isWindowWidthGreaterThan() ? 'none' : 'block'}} disabled={gridColumns===4}>4X4</Button>
        <Button onClick = {() => handleGridChange(5, 5 * 2)} style = {{display : !isWindowWidthGreaterThan() ? 'none' : 'block'}} disabled={gridColumns===5}>5X2</Button>
        <Button onClick = {() => handleGridChange(7, 7 * 3)} style = {{display : !isWindowWidthGreaterThan() ? 'none' : 'block'}} disabled={gridColumns===7}>7X3</Button>
      </SelectGridContainer>
      <GridContainer style = {{gridTemplateColumns : `repeat(${gridColumns}, 1fr)` }}>
        {displayedData.map((data, index) => (
          <Link to={`/Post/${data["내용"]}`} key={index}>
            <GridItem key={index}><img src={data["url"]}/></GridItem>
          </Link>
        ))}
      </GridContainer>
      <Pagination>
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
      </Pagination>
    </div>
  )
}

export default Section;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin:16px;    
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const SelectGridContainer= styled.div`
  display: flex;
  justify-content: left;
  gap: 4px;
  margin: 16px; 
`;

export const SelectOrderContainer= styled.div`
  display: flex;
  justify-content: left;
  gap: 4px;
  margin: 16px; 
`;