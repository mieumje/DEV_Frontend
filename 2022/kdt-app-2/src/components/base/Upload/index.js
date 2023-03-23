import styled from '@emotion/styled';
import { useRef, useState } from 'react';

const Input = styled.input`
  display: none;
`;

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Upload = ({ children, droppable, name, accept, value, onChange, ...props}) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChoseFile = () => {
    inputRef.current.click();
  };

  // drag&drop
  // 1. drag를 통해 컴포넌트 내부로 들어왔을 때 처리
  // 2. drag를 하다 바깥으로 나갔을 때 처리
  // 3. 이벤트 전파 방지(안하면 업로드 시 새 창이 열림)
  // 4. 파일을 컴포넌트에 drop 했을 때 처리
  const handleDragEnter = (e) => {
    if (!droppable) return;

    e.preventDefault(); // 브라우저 기본 이벤트를 막고
    e.stopPropagation(); // 부모나 자식 컴포넌트로 이벤트 전파를 방지

    if (e.dataTransfer.item && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };
  const handleDragOver = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer 
      onClick={handleChoseFile} 
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange}/>
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  );
}

export default Upload;