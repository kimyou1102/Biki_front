import styled, { css } from 'styled-components';

interface TrProps {
  highlightStatus?: boolean;
}

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

  &.mobile {
    padding: 10px 10px 10px 0px;
    line-height: 1.5rem;
  }
`;

export const Tr = styled.tr<TrProps>`
  height: 32px;

  ${(props) =>
    props.highlightStatus &&
    css`
      color: var(--main-color);
    `}
`;

export const THead = styled.thead`
  background-color: #eeeeee;
  height: 32px;
  font-weight: bold;
`;
