import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
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

const Th = styled.th<{ size?: number; isMobile?: boolean }>`
  font-size: ${(props) => (props.size ? `${props.size}rem` : '0.8rem')};
  height: calc(56px * 0.8);
  vertical-align: middle;
  border: ${(props) => (props.isMobile ? 'none' : '2px solid var(--main-color)')};
  padding: ${(props) => (props.isMobile ? '10px' : '0px')};

  &.header {
    font-weight: bold;
    border-top: 2px solid var(--main-color);
    border-bottom: 2px solid var(--main-color);
  }

  &.mobile-header {
    font-weight: bold;
    border-bottom: 1px solid var(--main-color);
    padding: 0px;
  }
`;

export function ScheduleTable({ data }: Props) {
  const { t } = useTranslation();
  const now = new Date();
  const today = `${now.getFullYear()}${now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1}${
    now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
  }`;
  const openDate = '20230708';
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <div>
      <table style={{ width: '100%', border: '2px solid var(--main-color)', borderRadius: '4px' }} id="collapse">
        <thead>
          <Tr>
            <Th size={0.75} className="mobile-header" isMobile>
              {t(`movie.schedule.date`)}
            </Th>
            <Th size={0.75} className="mobile-header" isMobile>
              {t(`movie.schedule.time`)}
            </Th>
            <Th size={0.75} className="mobile-header" isMobile>
              {t(`movie.schedule.theater`)}
            </Th>
            <Th size={0.75} className="mobile-header" isMobile>
              {today === openDate ? t(`movie.schedule.ticket`) : t(`movie.schedule.ticketOpen`)}
            </Th>
          </Tr>
        </thead>
        <tbody>
          {data?.schedule.length > 0 ? (
            data.schedule.map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={i}>
                <Th isMobile>{e.screeningDate.slice(2).replace(/-/gi, '.')}</Th>
                <Th isMobile>{e.startTime.slice(0, 5)}</Th>
                <Th isMobile>{e.theater}</Th>
                <Th isMobile>
                  {today === openDate ? (
                    <Button
                      size={1}
                      width={120}
                      bgcolor="var(--main-color)"
                      color="white"
                      weight="bold"
                      padding="calc(6px * 0.8) calc(36px * 0.8)"
                      radius="8px"
                      onClick={() => window.open('https://mobile.dureraum.org:44500/bccm/main/main.do?rbsIdx=1')}
                    >
                      {t(`movie.schedule.reservation`)}
                    </Button>
                  ) : (
                    <h1>{t(`movie.schedule.expected`)}</h1>
                  )}
                </Th>
              </Tr>
            ))
          ) : (
            <Tr>
              <Th isMobile>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile>
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
  ) : (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <Tr>
            <Th isMobile={false} className="header">
              {t(`movie.schedule.date`)}
            </Th>
            <Th isMobile={false} className="header">
              {t(`movie.schedule.time`)}
            </Th>
            <Th isMobile={false} className="header">
              {t(`movie.schedule.theater`)}
            </Th>
            <Th isMobile={false} className="header">
              {t(`movie.schedule.addtional`)}
            </Th>
            <Th isMobile={false} className="header">
              {today === openDate ? t(`movie.schedule.ticket`) : t(`movie.schedule.ticketOpen`)}
            </Th>
          </Tr>
        </thead>
        <tbody>
          {data?.schedule.length > 0 ? (
            data.schedule.map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={i}>
                <Th isMobile={false}>{e.screeningDate}</Th>
                <Th isMobile={false}>{e.startTime.slice(0, 5)}</Th>
                <Th isMobile={false}>{e.theater}</Th>
                <Th isMobile={false}>{data.addInfo}</Th>
                <Th isMobile={false}>
                  {today === openDate ? (
                    <Button
                      size={1}
                      width={120}
                      bgcolor="var(--main-color)"
                      color="white"
                      weight="bold"
                      padding="calc(6px * 0.8) calc(36px * 0.8)"
                      radius="8px"
                      onClick={() => window.open('https://mobile.dureraum.org:44500/bccm/main/main.do?rbsIdx=1')}
                    >
                      {t(`movie.schedule.reservation`)}
                    </Button>
                  ) : (
                    <h1>{t(`movie.schedule.expected`)}</h1>
                  )}
                </Th>
              </Tr>
            ))
          ) : (
            <Tr>
              <Th isMobile={false}>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile={false}>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile={false}>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile={false}>{t(`movie.schedule.empty`)}</Th>
              <Th isMobile={false}>
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
