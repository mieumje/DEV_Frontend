import { useState } from "react";
import useHotkey from "../../hooks/useHotkey";

export default {
  title: 'Hooks/useHotKey'
};

export const Default = () => {
  const [value, setValue] = useState('');
  const hotkeys = [
    {
      global: true,
      combo: 'meta+shift+k',
      onKeyDown: (e) => {
        alert('meta+shift+k');
      }
    },
    {
      global: true,
      combo: 'esc',
      onKeyDown: (e) => {
        alert('esc');
      }
    },
    {
      combo: '`',
      onKeyDown: (e) => {
        setValue('');
      }
    }
  ];

  const { handleKeyDown } = useHotkey(hotkeys);

  return (
    <div>
      <div>
        useHotKey 테스트
      </div>
      <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
};