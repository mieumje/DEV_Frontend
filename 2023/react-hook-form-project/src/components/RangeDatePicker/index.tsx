import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';

function RangeDatePicker() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'd'));

  return (
    <>
      <DatePicker
        label="시작일"
        value={startDate}
        onChange={(newValue) => {
          if (newValue) {
            const flag =
              newValue?.isAfter(endDate) ||
              newValue.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD');
            flag && setEndDate(newValue.add(1, 'd'));
          }
          newValue && setStartDate(newValue);
        }}
        minDate={dayjs()}
        disablePast
        format="YYYY/MM/DD"
      />
      <DatePicker
        label="종료일"
        value={endDate}
        onChange={(newValue) => {
          newValue && setEndDate(newValue);
        }}
        minDate={startDate}
        disablePast
        format="YYYY/MM/DD"
      />
    </>
  );
}

export default RangeDatePicker;
