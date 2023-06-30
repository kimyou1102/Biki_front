import styled from 'styled-components';

export const SignupBox = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '90%' : 'calc(576px)')};
  background: rgb(238, 238, 238);
  padding: ${(props) => (props.isMobile ? '16px' : 'calc(32px)')};
  border-radius: 16px;
  margin: 0px auto;
  box-sizing: border-box;
`;
