import React from 'react';
import { H1, StyledStrong, Img, Section, Span, Text, FlexContainer, Button } from '@atoms';
import { SymbolChatacter } from '@molecules';
import { Footer } from '@layout/Footer';
import poster from '../../assets/images/poster.png';
import slogan from '../../assets/images/slogan.png';
import character1 from '../../assets/images/character1.png';
import character2 from '../../assets/images/character2.png';
import character3 from '../../assets/images/character3.png';
import logo from '../../assets/images/Biky_Logo.png';
import emblem from '../../assets/images/emblem.png';

export function FestivalSymbolPage() {
  const characterData = [
    {
      id: 1,
      name: '바로',
      src: character1,
      text1: '썬글라스 낀 영화배우를 보고난 후 배우가<br/>되어야 겠다고 결심한 곰 name:바로',
      text2: '다소 덜렁대는 성격이지만 연기에 대한<br/>열정 만큼은 프로페셔널입니다.',
      text3: '바로name:의 활약을 기대해주세요!',
    },
    {
      id: 2,
      name: '꾸미',
      src: character2,
      text1: '배우가 된 친구 바로를 보고영화감독을<br/>꿈꾸는 갈매기 name:꾸미',
      text2: '신중하고 꼼꼼한 성격에가끔 바로와 다투기도<br/>하지만 영화 제작에 꼭 필요한 존재입니다.',
      text3: '꾸미name:의 무궁무진한 작품 세계를 응원해주세요!',
    },
    {
      id: 3,
      name: '씽키',
      src: character3,
      text1: '두 친구를 위해 스태프가 된 씽크탱크 name:씽키',
      text2: '바로와 꾸미 사이를 중재하는<br/>사려깊은 친구입니다.',
      text3: '반짝이는 아이디어를 통해 영화에 활력을불어넣는<br/>씽키name:의 멋진 모습들 지켜보세요!',
    },
  ];

  return (
    <div>
      <Section>
        <H1 font="PretendardBold" weight="bold" size={2.5}>
          페스티벌 심벌
        </H1>
        <div style={{ overflow: 'hidden' }}>
          <StyledStrong
            font="PretendardBold"
            size={2}
            color="black"
            margin="calc(40px * 0.8) 0 calc(32px * 0.8) 0"
            display="block"
          >
            공식포스터
          </StyledStrong>
          <Img src={poster} alt="포스터" width={1280} height={895} />
          <Text color="#767676" className="right" margin="calc(24px * 0.8) 0 calc(16px * 0.8) 0">
            디자인 안희정
          </Text>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <StyledStrong font="PretendardBold" size={2} color="black" margin="calc(40px * 0.8) 0" display="block">
            슬로건
          </StyledStrong>
          <div style={{ textAlign: 'center' }}>
            <Img src={slogan} alt="슬로건" width={886} height={591} />
          </div>
          <Text size={1.25} className="center" margin="calc(32px * 0.8) 0 0 0">
            BIKY에서 서로의 개성을 존중하고 다름을 인정하는 태도를 인지하고 돌아갔으면 하는 바람을 담아 “달라도 좋아!”를
            영화제의 슬로건으로 정하였습니다. <br /> BIKY는 나와 다른 세상에 대해 관심을 기울이는 자세를 통해 더불어
            살아가는 화합된 세상을 꿈꿉니다.
          </Text>
          <Text color="#767676" className="right" margin="calc(24px * 0.8) 0">
            Copyright © 2023 BIKY All rights reserved.
          </Text>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <StyledStrong font="PretendardBold" size={2} color="black" margin="calc(40px * 0.8) 0" display="block">
            캐릭터
          </StyledStrong>
          <FlexContainer>
            {characterData.map((e) => (
              <SymbolChatacter key={e.id} src={e.src} name={e.name} text1={e.text1} text2={e.text2} text3={e.text3} />
            ))}
          </FlexContainer>

          <Text color="#767676" className="right" margin="calc(24px * 0.8) 0">
            Copyright © 2023 BIKY All rights reserved.
          </Text>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <StyledStrong font="PretendardBold" size={2} color="black" margin="calc(40px * 0.8) 0" display="block">
            로고
          </StyledStrong>
          <div style={{ textAlign: 'center', marginBottom: 'calc(24px * 0.8)' }}>
            <Img src={logo} alt="로고" width={294} height={106} />
          </div>
          <Text size={1.25} className="center">
            주황색 점에서 선과 기둥으로 뻗어나가는 BIKY를 완성합니다.어린이와 청소년들이
            <br />
            BIKY를 통해 성장하는 모습을 의미합니다.
          </Text>
          <FlexContainer justify="center" margin="calc(22px * 0.8) 0 0 0">
            <a href={logo} download>
              <Button
                bgColor="#74B743"
                color="white"
                radius="8px"
                width={280}
                padding="calc(18px * 0.8) calc(38px * 0.8)"
                margin="0 calc(20px * 0.8) 0 0"
              >
                로고 PNG 파일 다운로드
              </Button>
            </a>

            <Button
              bgColor="#74B743"
              color="white"
              radius="8px"
              width={280}
              padding="calc(18px * 0.8) calc(38px * 0.8)"
            >
              로고 AI 파일 다운로드
            </Button>
          </FlexContainer>

          <Text color="#767676" className="right" margin="calc(24px * 0.8) 0">
            Copyright © 2023 BIKY All rights reserved.
          </Text>
        </div>
        <div style={{ overflow: 'hidden', marginTop: 'calc(40px * 0.8)' }}>
          <Text>어린이해방선언 100주년, 어린이가 행복한 나라</Text>
          <StyledStrong font="PretendardBold" size={2} color="black" margin="4px 0 calc(40px * 0.8) 0" display="block">
            앰블럼 이야기
          </StyledStrong>
          <div style={{ textAlign: 'center', marginBottom: 'calc(40px * 0.8)' }}>
            <Img src={emblem} alt="앰블럼" width={860} height={1400} />
          </div>
          <FlexContainer justify="center">
            <Button
              bgColor="#74B743"
              color="white"
              radius="8px"
              width={500}
              padding="calc(18px * 0.8) calc(38px * 0.8)"
            >
              어린이해방선언 100주년, AI 파일 다운로드
            </Button>
          </FlexContainer>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
