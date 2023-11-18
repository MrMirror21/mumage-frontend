import React, { useState } from 'react'
import UserRegisterForm from '../components/SignUp/UserRegisterForm'
import styled from 'styled-components'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    "name" : "",
    "nickName" : "",
    "loginId" : "",
    "password" : "",  
  })
  return (
    <>
      <Wrapper>
        <UserRegisterForm 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </Wrapper>
    </>
  )
}

export default SignUp

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%));

  `;

