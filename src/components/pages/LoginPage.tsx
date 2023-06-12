import React, { useState } from 'react';
import styled from 'styled-components';
import { SignupBox, Button, Text, FlexContainer, Input, Span } from '@atoms';
import { SingupTitleBox } from '@molecules';
import { Footer } from '@layout/Footer';
import { useNavigate } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  gap: calc(8px * 0.8);
  margin-top: calc(21px * 0.8);
  margin-bottom: calc(64px * 0.8);
`;

export function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <Text size={2.5} weight="bold" className="center" margin="calc(119px * 0.8) 0 calc(59px * 0.8) 0">
          BIKY 로그인
        </Text>
        <SignupBox>
          <SingupTitleBox color="#74B743">로그인</SingupTitleBox>
          <form onSubmit={onSubmit}>
            <Grid>
              <Span color="#191919" weight="bold">
                이메일
              </Span>
              <Input
                border="none"
                radius="16px"
                width="100%"
                height={60}
                placeholder="이메일을 입력해주세요."
                padding="0 0 0 calc(16px * 0.8)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Span color="#191919" weight="bold">
                비밀번호
              </Span>
              <Input
                border="none"
                radius="16px"
                width="100%"
                height={60}
                placeholder="비밀번호를 입력해주세요."
                padding="0 0 0 calc(16px * 0.8)"
                value={password}
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
      <Footer />
    </>
  );
}
