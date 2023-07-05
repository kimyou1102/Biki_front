import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { SignupBox, Button, Text, FlexContainer, Input, Span } from '@atoms';
import { SingupTitleBox, SignupInput } from '@molecules';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { createSignupApi } from '../../apis/user/create-signup-api';

const Grid = styled.div`
  display: grid;
  gap: calc(16px * 0.8);
  margin-top: calc(21px * 0.8);
  margin-bottom: calc(64px * 0.8);
`;

export function SignupPage() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const signupApi = async () => {
    await createSignupApi(userInfo)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const validation = () => {
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regexEmail.test(userInfo.email)) {
      alert('이메일이 올바른 형식이 아닙니다.');
      return false;
    }

    if (userInfo.password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    return true;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInfo);

    if (!validation()) {
      return;
    }
    signupApi();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, fn: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [fn]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>BIKY 회원가입</title>
      </Helmet>
      <div>
        <Text
          size={isMobile ? 1.5 / 0.8 : 2.5}
          weight="bold"
          className="center"
          margin="calc(119px * 0.8) 0 calc(59px * 0.8) 0"
        >
          BIKY 회원가입
        </Text>
        <SignupBox isMobile={isMobile}>
          <SingupTitleBox color="#3F6424">회원가입</SingupTitleBox>
          <form onSubmit={onSubmit}>
            <Grid>
              <SignupInput
                label="성함"
                placeholder="성함을 입력해주세요."
                value={userInfo.name}
                onChange={(e) => {
                  handleInput(e, 'name');
                }}
              />
              <SignupInput
                label="연락처"
                placeholder="휴대폰 번호를 입력해주세요."
                value={userInfo.phone}
                onChange={(e) => {
                  handleInput(e, 'phone');
                }}
              />
              <SignupInput
                label="이메일/아이디"
                placeholder="이메일을 입력해주세요."
                value={userInfo.email}
                onChange={(e) => {
                  handleInput(e, 'email');
                }}
              />
              <SignupInput
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                inputType="password"
                value={userInfo.password}
                onChange={(e) => {
                  handleInput(e, 'password');
                }}
              />
              <SignupInput
                label="비밀번호 확인"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                inputType="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
            <Button
              radius="16px"
              bgcolor="#74B743"
              height={70}
              color="white"
              weight="bold"
              className="full"
              type="submit"
              margin="0 0 calc(16px * 0.8) 0"
            >
              회원가입하기
            </Button>
          </form>
          <FlexContainer justify="space-between">
            <Button
              radius="16px"
              bgcolor="#D9D9D9"
              height={70}
              color="white"
              weight="bold"
              className="full"
              type="submit"
              margin="0 0 calc(16px * 0.8) 0"
              onClick={() => navigate('/')}
            >
              돌아가기
            </Button>
          </FlexContainer>
        </SignupBox>
      </div>
    </>
  );
}
