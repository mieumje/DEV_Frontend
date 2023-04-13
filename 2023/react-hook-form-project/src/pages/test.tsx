import styled from '@emotion/styled';
import { DatePicker, UploadProps } from 'antd';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  padding: 32px;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f9;
  flex-grow: 1;
  width: 100%;
  max-width: 1330px;
  height: 100%;
  gap: 2rem;
`;

const AlignP = styled.p`
  width: 100%;
  text-align: center;
`;

const ImageInputWrapper = styled.div`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  width: 120px;
`;

function Test() {
  const navigate = useNavigate();
  const { RangePicker } = DatePicker;
  const { Dragger } = Upload;
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string[]>([]);
  const [fileList, setFileList] = useState<Blob[]>([]);
  const dragProps: UploadProps = {
    name: 'file',
    listType: 'picture',
    multiple: true,
    // beforeUpload(file) {
    //   console.log(file);
    //   setFileList(fileList.concat(file));
    //   return false;
    // },
  };

  const handleClick = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('startDt', duration[0]);
    formData.append('endDt', duration[1]);
    fileList.forEach((item, index) => {
      formData.append(`file ${index}`, item);
    });

    const obj = {
      title,
      startDt: duration[0],
      endDt: duration[1],
      fileList,
    };
    console.log(obj);
  };

  return (
    <Container>
      <StyledForm>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <p
            style={{
              display: 'inline-block',
              width: '100%',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            <label>이벤트 제목</label>
          </p>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
          }}
        >
          <p
            style={{
              display: 'inline-block',
              width: '100%',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            <label>이벤트 기간</label>
          </p>
          <RangePicker
            style={{ width: '100%' }}
            onChange={(dates) => {
              if (!dates) return;
              const [a, b] = dates;
              const start = a?.format('YYYY-MM-DD');
              const end = b?.format('YYYY-MM-DD');
              setDuration([start!!, end!!]);
            }}
          />
        </div>
        <br />
        <ImageInputWrapper>
          <p
            style={{
              display: 'inline-block',
              width: '100%',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            <label>이벤트 이미지</label>
          </p>
          <Dragger
            {...dragProps}
            previewFile={async (file) => {
              const objectUrl = URL.createObjectURL(file);
              return objectUrl;
            }}
            onRemove={(file) => {
              const { thumbUrl } = file;
              thumbUrl && URL.revokeObjectURL(thumbUrl);
              console.log(thumbUrl);
            }}
            beforeUpload={(file) => {
              console.log(file);
              setFileList((fileList) => fileList.concat(file));
              return false;
            }}
            style={{ width: '100%' }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <AlignP className="ant-upload-text">
              클릭 또는 파일을 드래그해주세요.
            </AlignP>
            <AlignP className="ant-upload-hint">
              이미지 파일만 가능합니다.
            </AlignP>
          </Dragger>
        </ImageInputWrapper>
        <FlexDiv>
          <StyledButton>취소</StyledButton>
          <StyledButton type="primary" onClick={handleClick}>
            제출
          </StyledButton>
        </FlexDiv>
      </StyledForm>
      <StyledButton type="primary" onClick={() => navigate('/')}>
        Home
      </StyledButton>
    </Container>
  );
}

export default Test;
