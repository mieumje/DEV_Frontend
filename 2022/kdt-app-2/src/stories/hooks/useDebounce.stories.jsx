import { Fragment, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default {
  title: 'Hooks/useDebounce'
};

const companies = [
  'Cobalt',
  'Grepp',
  'Kakao',
  'Naver',
  'Daangn',
  'Coupang',
  'Line',
  'Woowahan'
];

export const Default = () => {
  const [value, setValue] = useState('');
  const [result, setReuslt] = useState([]);

  useDebounce(() => {
    if (value === '')  setReuslt([]);
    else {
      setReuslt(
        companies.filter(
          company => company.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }, 300, [value])

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        {result.map((item) => (
          <Fragment key={item}>
            {item}
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};