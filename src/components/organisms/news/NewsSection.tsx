import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useRecoilValue } from 'recoil';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router-dom';
import { Button, FlexContainer, Text, Span } from '@atoms';
import { PostType } from '../../../models/post';
import { languageState } from '../../../store/language/atom';
import attach_file_icon from '../../../assets/images/attach_file.png';

// interface Props {
//   title: string;
//   count: number;
//   date: string;
//   url: string;
//   data: PostType;
// }

interface DataType extends PostType {
  date?: string;
}

interface Props {
  data: DataType;
  url: string;
}

const AttacBox = styled.button<{ mobile?: boolean }>`
  border-radius: 8px;
  border: 1px solid DBDBDB;
  width: ${(props) => (props.mobile ? '100%' : 'calc(1280px * 0.8)')};
  height: calc(56px * 0.8);
  cursor: pointer;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 37px;
  margin-bottom: 10px;

  span {
    color: #767676;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(17%, 17%);
  width: calc(37px * 0.8);
  height: calc(37px * 0.8);
`;

export function NewsSection({ url, data }: Props) {
  const navigate = useNavigate();
  const [element, setElement] = useState<any>('');
  const date = new Date(data.createdDate!);
  const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  function getFileName(targetUrl: string) {
    const fileName = targetUrl.substring(targetUrl.lastIndexOf('/') + 1);
    const resultFileName = decodeURIComponent(fileName);

    return resultFileName;
  }

  const downloadFile = async (file: any, filename: any) => {
    const download = document.createElement('a');

    fetch(file, { method: 'GET' })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        console.log(filename.substring(11));
        a.download = filename.substring(11);
        document.body.appendChild(a);
        a.click();
        setTimeout((_: any) => {
          window.URL.revokeObjectURL(blobUrl);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.error('err: ', err);
      });
  };

  // console.log(data);
  // console.log(data.body);
  // console.log(data.files);

  useEffect(() => {
    setElement(data.body);
    // console.log(data.body);
  }, [data.body]);

  return (
    <div>
      <Button
        border="#DBDBDB"
        weight="bold"
        size={1.25}
        radius="10px"
        width={88}
        height={48}
        display="block"
        margin="22px 0 calc(33px * 0.8) auto"
        onClick={() => navigate(`/news/${url}`)}
      >
        {t(`news.list`)}
      </Button>
      {isMobile ? (
        <FlexContainer justify="space-between" margin="0 0 0.5rem 0" direction="column" gap="5px">
          <Text size={2} className="left">
            {language === 'English' ? data.titleKo : data.titleEn}
          </Text>
          <Span>{dateStr}</Span>
          <Span>
            {t(`view`)} {data.view}
          </Span>
        </FlexContainer>
      ) : (
        <>
          <FlexContainer justify="space-between" align="center" margin="0 0 0.5rem 0">
            <Text size={2} className="left">
              {language === 'English' ? data.titleKo : data.titleEn}
            </Text>
            <Span>
              {t(`view`)} {data.view}
            </Span>
          </FlexContainer>
          <Span>{dateStr}</Span>
        </>
      )}

      {/* <div style={{ marginTop: 'calc(82px * 0.8)' }}>{element && <Viewer initialValue={element} />}</div> */}
      <div style={{ marginTop: 'calc(82px * 0.8)' }}>
        <div className="ck-content" dangerouslySetInnerHTML={{ __html: element }} />
        {data.files.length > 0
          ? data.files.map((e, i) => (
              <AttacBox
                mobile={isMobile}
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                onClick={() =>
                  // downloadFile('https://biky-files.s3.ap-northeast-2.amazonaws.com/post/2023/06/15/8.jpg', '이름')
                  downloadFile(e.file, e.file.replace('https://biky-files.s3.ap-northeast-2.amazonaws.com/post/', ''))
                }
              >
                <Icon src={attach_file_icon} alt="첨부파일아이콘" />
                <span>{getFileName(e.file)}</span>
              </AttacBox>
            ))
          : null}
      </div>
    </div>
  );
}
