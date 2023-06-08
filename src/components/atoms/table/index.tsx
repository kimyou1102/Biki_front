import styled from 'styled-components';

export const Th = styled.th`
  vertical-align: middle;
  cursor: pointer;
  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &.title {
    text-align: left;
  }
`;

export const Tr = styled.tr`
  height: 32px;
`;

export const THead = styled.thead`
  background-color: #eeeeee;
  height: 32px;
  font-weight: bold;
`;
