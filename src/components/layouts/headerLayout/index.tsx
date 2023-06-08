import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Nav } from '@organisms';
import { Header } from '@molecules';

const Container = styled.div`
  /* max-width: calc(1280px * 0.8);
  margin: auto; */
`;

export function HeaderLayout() {
  return (
    <>
      <Container>
        <Header />
        <Nav />
      </Container>
      <Outlet />
    </>
  );
}
