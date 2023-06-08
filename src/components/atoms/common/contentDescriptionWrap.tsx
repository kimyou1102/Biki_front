import styled from 'styled-components';

interface Props {
  type?: string;
}

export const ContentDescriptionWrap = styled.div<Props>`
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  background-color: ${(props) => (props.type === 'main' ? 'var(--main-color)' : '#EEEEEE')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &.normal {
    width: calc(413px * 0.8);
    height: ${(props) => (props.type === 'main' ? 'calc(119px * 0.8)' : 'calc(138px * 0.8)')};
    padding: calc(19px * 0.8);
  }

  &.big {
    width: ${(props) => (props.type === 'main' ? 'calc(630px * 0.8)' : 'calc(413px * 0.8)')};
    height: ${(props) => (props.type === 'main' ? 'calc(119px * 0.8)' : 'calc(138px * 0.8)')};
    padding: ${(props) => (props.type === 'main' ? 'calc(13px * 0.8)' : 'calc(19px * 0.8)')};
  }

  &.small {
    width: calc(413px * 0.8);
    height: ${(props) => (props.type === 'main' ? 'calc(96px * 0.8)' : 'calc(85px * 0.8)')};
    padding: ${(props) => (props.type === 'main' ? 'calc(13px * 0.8)' : 'calc(23px * 0.8)')};
  }
`;
