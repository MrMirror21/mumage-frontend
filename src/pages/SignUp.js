import React, { useState } from 'react'
import styled from 'styled-components'
import UserRegisterForm from '../components/SignUp/UserRegisterForm'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    "name" : "",
    "userName" : "",
    "userId" : "",
    "userPW" : "",
  })
  return (
    <>
      signup
      <UserRegisterForm 
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </>
  )
}

export default SignUp

