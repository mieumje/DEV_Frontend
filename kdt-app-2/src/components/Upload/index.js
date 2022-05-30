import styled from '@emotion/styled';
import { useRef, useState } from 'react';

const Input = styled.input`
  display: none;
`

const Upload = ({ children, name, accept, value, onChange, ...props}) => {
  const [file, setFile] = useState(value);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changeFile = files[0];
    setFile(changeFile);
    onChange && onChange(changeFile);
  };

  const handleChoseFile = () => {
    inputRef.current.click();
  };

  return (
    <div onClick={handleChoseFile} {...props}>
      <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange}/>
      {typeof children === 'function' ? children(file) : children}
    </div>
  );
}

export default Upload;