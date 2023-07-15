import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

interface Props {
  year: string;
  location: string;
  host: string;
}

const Td = styled.td`
  vertical-align: middle;
  text-align: left;
  padding: 22px 20px;
  border: 1px solid #dbdbdb;
`;

export function HistoryOutlineTable({ year, location, host }: Props) {
  const { t } = useTranslation();

  return (
    <table style={{ width: '100%', border: '1px solid #DBDBDB' }}>
      <tr>
        <Td>{t(`history.period`)}</Td>
        <Td>{year}</Td>
      </tr>
      <tr>
        <Td>{t(`history.location`)}</Td>
        <Td>{location}</Td>
      </tr>
      <tr>
        <Td>{t(`history.host`)}</Td>
        <Td>{host}</Td>
      </tr>
    </table>
  );
}
