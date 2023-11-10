import React, { useState } from 'react'
import styled from 'styled-components'
import SignInForm from '../components/SignIn/SignInForm'
import { login } from '../utils/axios'

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    "userId" : "",
    "userPW" : "",
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