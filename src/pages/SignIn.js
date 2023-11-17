import React, { useState } from 'react'
import SignInForm from '../components/SignIn/SignInForm'
import { login } from '../utils/axios'
import styled from 'styled-components'

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    "loginId" : "",
    "password" : "",
  })
  return (
    <>
      <PageBody>
        <SignInForm 
          userInfo={loginInfo}
          setUserInfo={setLoginInfo}
          onSubmitHandler={login}
        />
      </PageBody>
    </>
  )
}

export default SignIn

const PageBody = styled.div`
  width: 100vw;
  height: 100vh;
`; 