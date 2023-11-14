import React, { useState } from 'react'
import UserRegisterForm from '../components/SignUp/UserRegisterForm'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    "name" : "",
    "nickName" : "",
    "loginId" : "",
    "password" : "",  
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

