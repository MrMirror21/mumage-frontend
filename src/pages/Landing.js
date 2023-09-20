import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate();

  const navigateToSection = () => {
    navigate("/section");
  }
  return (
    <>
      <StyledTitle>Landing</StyledTitle>
      <button onClick = {navigateToSection}>이동</button>
    </>
  )
}

export default Landing

const StyledTitle = styled.div``;
