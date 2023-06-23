import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { SignupBox, Button, Text, FlexContainer, Input, Span } from '@atoms';
import { SingupTitleBox, SignupInput } from '@molecules';
import { Footer } from '@layout/Footer';
import { useNavigate } from 'react-router-dom';
import { createLoginApi } from '../../apis/user/create-login-api';

const Grid = styled.div`
  display: grid;
  gap: calc(16px * 0.8);
  margin-top: calc(21px * 0.8);
  margin-bottom: calc(64px * 0.8);
`;

export function LoginPage() {
  const [cookies, setCookie] = useCookies(['access_token']);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const loginApi = async () => {
    await createLoginApi({ email, password })
      .then((res) => {
        const cookie = res.headers.authorization.replace('Bearer ', '');
        setCookie('access_token', cookie);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const validation = () => {
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regexEmail.test(email)) {
      alert('이메일이 올바른 형식이 아닙니다.');
      return false;
    }

    return true;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    loginApi();
  };

  return (
    <div>
      <Text size={2.5} weight="bold" className="center" margin="calc(119px * 0.8) 0 calc(59px * 0.8) 0">
        BIKY 로그인
      </Text>
      <SignupBox>
        <SingupTitleBox color="#74B743">로그인</SingupTitleBox>
        <form onSubmit={onSubmit}>
          <Grid>
            <SignupInput
              label="이메일"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SignupInput
              label="비밀번호"
              placeholder="이메일을 입력해주세요."
              value={password}
              inputType="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            radius="16px"
            bgcolor="var(--main-color)"
            height={70}
            color="white"
            weight="bold"
            className="full"
            type="submit"
            margin="0 0 calc(16px * 0.8) 0"
          >
            로그인 하기
          </Button>
        </form>
        <FlexContainer justify="space-between">
          <Button
            radius="16px"
            width="49%"
            bgcolor="#D9D9D9"
            height={70}
            weight="bold"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </Button>
          <Button radius="16px" width="49%" bgcolor="#D9D9D9" height={70} weight="bold">
            비밀번호 찾기
          </Button>
        </FlexContainer>
      </SignupBox>
    </div>
  );
}
