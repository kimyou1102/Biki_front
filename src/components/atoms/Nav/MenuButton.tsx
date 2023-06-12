import styled from 'styled-components';

export const MenudButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  color: black;
  width: calc(209px * 0.8);
  height: calc(56px * 0.8);
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;
