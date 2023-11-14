import React, { useState } from 'react'
import styled from 'styled-components'
import SignInForm from '../components/SignIn/SignInForm'
import { login } from '../utils/axios'

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    "loginId" : "",
    "password" : "",
  })
  return (
    <>
      <SignInForm 
        userInfo={loginInfo}
        setUserInfo={setLoginInfo}
        onSubmitHandler={login}
      />
    </>
  )
}

export default SignIn

const StyledComponent = styled.div`

`;