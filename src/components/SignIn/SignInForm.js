import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignInForm = ({ userInfo, setUserInfo, onSubmitHandler }) => {
  return (
    <>
      <SignInContainer>
        <MainText>Mumage</MainText>
        <SignInFormBox>
          <InputContainer>
            <IdInput
              type="id"
              value={userInfo.userId}
              onChange={(e) => setUserInfo({...userInfo, "loginId" : e.currentTarget.value})}
              placeholder="아이디"
              required
            />
          </InputContainer>
          <InputContainer>
            <PasswordInput
              type="password"
              value={userInfo.userPW}
              onChange={(e) => setUserInfo({...userInfo, "password" : e.currentTarget.value})}
              placeholder="비밀번호"
              required
            />
          </InputContainer>
          <SignInBtn onClick={onSubmitHandler}>로그인</SignInBtn>
          <FindIdLink>
            <Link to="/findid">아이디/비밀번호 찾기</Link>
          </FindIdLink>
        </SignInFormBox>
        <SocialSignInFormBox>
          <SubText>신규 회원이신가요?</SubText>
          <Link to="/signup">
            <EmailSignUpBtn>신규회원 가입하기</EmailSignUpBtn>
          </Link>
        </SocialSignInFormBox>
      </SignInContainer>
    </>
  );
};

export default SignInForm;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  min-width: 400px;
  max-height: 700px;
  margin: 100px auto;
  margin-bottom: 0;
`;

const MainText = styled.span`
  font-size: 3rem;
  font-weight: 600;
  color: #7054ff;
`;

const SignInFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  a {
    text-decoration: none;
  }
`;

const InputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 376px;
  max-width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

const IdInput = styled.input`
  border: none;
  border-radius: 100px;
  width: 350px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
  outline: none;
`;

const PasswordInput = styled(IdInput)``;

const SignInBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  margin: 2rem auto;
  width: 400px;
  height: 50px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  background: #313338;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const FindIdLink = styled.div`
  a {
    text-decoration: none;
    color: #8b8b8b;
    font-size: 1rem;
  }
`;

const SocialSignInFormBox = styled(SignInFormBox)`
  margin: 0;
  padding-top: 0;
  border: none;
`;

const SubText = styled.span`
  margin-bottom: 0.5rem;
  color: #8b8b8b;
  font-size: 1rem;
`;

const EmailSignUpBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  margin: 0.2rem;
  width: 400px;
  height: 50px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 1rem;
  color: #ffffff;
  background: #313338;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
