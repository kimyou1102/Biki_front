import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Nav } from '@organisms';
import { Header } from '@molecules';
import { Footer } from '@layout/Footer';

const Container = styled.div`
  /* max-width: calc(1280px * 0.8);
  margin: auto; */
`;

const Main = styled.div`
  min-height: calc(100vh - 94px - 55px);
  height: auto;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

export function HeaderLayout() {
  return (
    <>
      <Container>
        <Header />
        <Nav />
      </Container>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
