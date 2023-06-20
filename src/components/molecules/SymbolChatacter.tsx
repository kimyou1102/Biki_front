import React from 'react';
import { Img, Text, Span, FlexContainer } from '@atoms';

interface Props {
  name: string;
  src: string;
  text1: string;
  text2: string;
  text3: string;
}

export function SymbolChatacter({ name, src, text1, text2, text3 }: Props) {
  //   const [text1, text2, text3] = description.split('<br/>');
  const [text1Text, nameText] = text1.split('name:');

  const [text1First, text1Second] = text1Text.split('<br/>');

  const [text2First, text2Second] = text2.split('<br/>');
  const [text3First, text3Second] = text3.split('<br/>');

  let [lastTextName, lastText] = ['', ''];
  if (text3Second) {
    [lastTextName, lastText] = text3Second.split('name:');
  } else {
    [lastTextName, lastText] = text3First.split('name:');
  }
  return (
    <FlexContainer direction="column" align="center" width={413}>
      <Span color="#74B743" size={2}>
        {name}
      </Span>
      <Img src={src} alt="캐릭터" width={413} height={413} />
      {text1Second ? (
        <>
          <Text size={1.25} className="center">
            {text1First}
          </Text>
          <Text size={1.25} className="center">
            {text1Second}
            <Span size={1.25} color="#74B743">
              {nameText}
            </Span>
          </Text>
        </>
      ) : (
        <Text size={1.25} className="center">
          {text1First}
          <Span size={1.25} color="#74B743">
            {nameText}
          </Span>
        </Text>
      )}

      <br />
      <Text size={1.25} className="center">
        {text2First}
      </Text>
      <Text size={1.25} className="center">
        {text2Second}
      </Text>
      <br />
      {text3Second ? (
        <>
          <Text size={1.25} className="center">
            {text3First}
          </Text>
          <Text size={1.25} className="center">
            <Span size={1.25} weight="bold">
              {lastTextName}
            </Span>
            {lastText}
          </Text>
        </>
      ) : (
        <Text size={1.25} className="center">
          <Span size={1.25} weight="bold">
            {lastTextName}
          </Span>
          {lastText}
        </Text>
      )}
      {/* <Text className="center">{text3First}</Text>
      <Text className="center">{text3Second}</Text> */}
    </FlexContainer>
  );
}
