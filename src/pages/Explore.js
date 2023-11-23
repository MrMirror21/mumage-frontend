import React, { useState } from 'react';
import Icon from '../components/Icon';
import Section from '../components/Section';
import Dropdown from '../components/Dropdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionBar from '../components/Features/MenuSection';
import { useRecoilState } from 'recoil';
import { isfollowing } from '../utils/FetchDataRecoil';
import BottomNavBar from '../components/Features/BottomNavBar';
import MyPage from './MyPage/MyPage';
import { index } from "../utils/FetchDataRecoil";

const Explore = () => {
  const [isFollowing, setIsFollowing] = useRecoilState(isfollowing);
  const ind = useRecoilState(index);
  const [tabIndex, setTabIndex] = useState(isFollowing ? 1 : 2);
  const onClickHandler = (Index) => {
      setIsFollowing(Index === 1 ? true : false);
      setTabIndex(Index);
  }
  console.log(ind);

  return (
    <>
      <IconContainer><Link to='/'><Icon/></Link></IconContainer>
      <SectionBar index={tabIndex} onClickHandler={onClickHandler}/>
      {ind[0] === 1 ? 
      <>
        <Dropdown name="Explore"/>
        <Section/> 
      </> : <MyPage />}


      <BottomNavBar />
    </>
  );
}

export default Explore;

const IconContainer = styled.div`
  background: #ffffff;
`;