import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div>
      <table style={{ width: 'calc(1360px * 0.8)' }}>
        <thead>
          <Tr>
            <Th className="header">{t(`movie.schedule.date`)}</Th>
            <Th className="header">{t(`movie.schedule.time`)}</Th>
            <Th className="header">{t(`movie.schedule.theater`)}</Th>
            <Th className="header">{t(`movie.schedule.addtional`)}</Th>
            <Th className="header">{t(`movie.schedule.ticket`)}</Th>
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
                    bgcolor="var(--main-color)"
                    color="white"
                    weight="bold"
                    padding="calc(6px * 0.8) calc(36px * 0.8)"
                    radius="8px"
                  >
                    {t(`movie.schedule.reservation`)}
                  </Button>
                </Th>
              </Tr>
            ))
          ) : (
            <Tr>
              <Th>{t(`movie.schedule.empty`)}</Th>
              <Th>{t(`movie.schedule.empty`)}</Th>
              <Th>{t(`movie.schedule.empty`)}</Th>
              <Th>{t(`movie.schedule.empty`)}</Th>
              <Th>
                <Button
                  width={130}
                  size={1}
                  bgcolor="var(--main-color)"
                  color="white"
                  weight="bold"
                  padding="calc(6px * 0.8) calc(36px * 0.8)"
                  radius="8px"
                >
                  {t(`movie.schedule.empty`)}
                </Button>
              </Th>
            </Tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
