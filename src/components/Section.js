import React, {useState, useEffect} from 'react'
import SelectBox from './SelectBox'
import {postsDataState} from '../store/ServerData'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { currentPageState, sectionValueState, orderState } from '../utils/DataRecoilState';
import {useRecoilState, useRecoilValue} from 'recoil';
import '../styles/Section.css';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 5px;
  margin : 16px; 
`;

export const GridItem = styled.div`
  aspect-ratio: 1 / 1;
  position : relative;
  img {
    position : absolute;
    width : 100%;
    height : 100%,
    object-fit : cover;
    border-radius: 10px;
    z-index: 10;
  }
`;

export const Button = styled.div`
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  padding: 5px 8px 5px 8px;
  color: white;
  border-radius: 10px;
  background: var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%));
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
  const postData = useRecoilValue(postsDataState);

  const matchedData = postData.filter(data => data["genre"].includes(sectionValue));
  
  const sortedData = matchedData.sort((a, b) => {
    if (order == 'likes') {
      return b["liked"] - a["liked"];
    }
    return 0;
  })
  const totalPage = Math.ceil(sortedData.length / itemsPerPage); 
  const displayedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleSmallGridSize = () => {
    if (gridColumns === 3) {
      handleGridChange(4, 4 * 4);
    } else {
      handleGridChange(3, 3 * 3);
    }
  }

  const toggleLargeGridSize = () => {
    if (gridColumns === 5) {
      handleGridChange(7, 7 * 3);
    } else {
      handleGridChange(5, 5 * 2);
    }
  }

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

  const isDisabled = (buttonType) => {
    switch (buttonType) {
      case 'up':
        return currentPage === totalPage;
      case 'down':
        return currentPage === 1;
      case 'page':
        return number => currentPage === number;
      default:
        return false;
    }
  };

  const handleUpPage = () => {
    if (isDisabled('up')) return;
    setCurrentPage(currentPage + 1);
  }
  const handleDownPage = () => {
    if (isDisabled('down')) return;
    setCurrentPage(currentPage - 1);
  }
  const handleChangePage = (page) => {
    if (isDisabled('page')(page)) return;
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

  const toggleOrder = () => {
    if (order === 'default') {
      setOrder('likes');
    } else {
      setOrder('default');
    }
  }

  return (
    <div>
      <div id="body">
        <SelectBoxContainer id="select-block">
          <SelectBox onChange={(value) => {
            setSectionValue(value);
            setCurrentPage(1);
          }} />
        </SelectBoxContainer>

        <div className="section-menu">
          <button className="section-menu-icon" onClick={gridColumns === 3 || gridColumns === 4 ? toggleSmallGridSize : toggleLargeGridSize}>
            {gridColumns === 3 || gridColumns === 5? 'View more' : 'View less'}
          </button>
          <button className="section-menu-icon" onClick={toggleOrder}>
            {order === 'default' ? 'Trending' : 'Recent'}
          </button>
        </div>
        <GridContainer id="grid-block"style = {{gridTemplateColumns : `repeat(${gridColumns}, 1fr)` }}>
          {displayedData.map((data, index) => (
            <Link to={`/Post/${data["postId"]}`} key={index}>
              <GridItem key={index}><img src={data["imageUrl"]}/></GridItem>
              <div id="grid-text">
                <div id="grid-title">{data["title"]}</div>
                <div id="grid-artist">{data["artist"]}</div>
              </div>
            </Link>
          ))}
        </GridContainer>
      </div>
      <Pagination>
        <Button onClick={handleDownPage} disabled={isDisabled('down')}>&lt;</Button>
          {getPageNumbers().map(number => (
            <PageButton
              key={number}
              onClick={() => handleChangePage(number)}
              disabled={isDisabled('page')(number)}
            >
              {number}
            </PageButton>
          ))}  
        <Button onClick={handleUpPage} disabled={isDisabled('up')}>&gt;</Button>
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