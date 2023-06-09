import React from 'react';
import styled from 'styled-components';
import { Button } from '@atoms';

type ScheduleType = {
  id: number;
  screeningDate: string;
  startTime: string;
  theater: string;
};

type DataType = {
  schedule: ScheduleType[];
  addInfo: string[];
};

interface Props {
  data: DataType;
}

const Tr = styled.tr``;

const Th = styled.th`
  font-size: 0.8rem;
  height: calc(56px * 0.8);
  border: 2px solid var(--main-color);
  vertical-align: middle;
  &.header {
    font-weight: bold;
  }
`;

export function ScheduleTable({ data }: Props) {
  return (
    <div>
      <table style={{ width: 'calc(1360px * 0.8)' }}>
        <thead>
          <Tr>
            <Th className="header">상영날짜</Th>
            <Th className="header">상영시간</Th>
            <Th className="header">상영극장</Th>
            <Th className="header">부가정보</Th>
            <Th className="header">티켓예매</Th>
          </Tr>
        </thead>
        <tbody>
          {data?.schedule.length > 0 ? (
            data.schedule.map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={i}>
                <Th>{e.screeningDate}</Th>
                <Th>{e.startTime}</Th>
                <Th>{e.theater}</Th>
                <Th>{data.addInfo.join(' ')}</Th>
                <Th>
                  <Button
                    size={1}
                    width={120}
                    bgColor="var(--main-color)"
                    color="white"
                    weight="bold"
                    padding="calc(6px * 0.8) calc(36px * 0.8)"
                    radius="8px"
                  >
                    예매
                  </Button>
                </Th>
              </Tr>
            ))
          ) : (
            <Tr>
              <Th>정보없음</Th>
              <Th>정보없음</Th>
              <Th>정보없음</Th>
              <Th>정보없음</Th>
              <Th>
                <Button
                  width={130}
                  size={1}
                  bgColor="var(--main-color)"
                  color="white"
                  weight="bold"
                  padding="calc(6px * 0.8) calc(36px * 0.8)"
                  radius="8px"
                >
                  정보없음
                </Button>
              </Th>
            </Tr>
          )}
        </tbody>
      </table>
    </div>
  );
}