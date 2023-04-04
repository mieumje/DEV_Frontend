import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type FormValues = {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
  mui: {
    startDate: Date;
    endDate: Date;
  };
  temp: {
    startDate: Date;
    endDate: Date;
  };
  name: string;
};
type Props = {
  onChange: (...event: any[]) => void;
  errors: FieldErrors<FormValues>;
};

type DateType = dayjs.Dayjs | null;

function Temp({ onChange, errors }: Props) {
  const [startDate, setStartDate] = useState<DateType>(null);
  const [endDate, setEndDate] = useState<DateType>(null);
  return (
    <>
      <div>
        <DatePicker
          label="start date"
          value={startDate}
          onChange={(newValue) => {
            // DatePicker의 onChange
            if (!newValue) return;
            setStartDate(newValue);
            const flag = newValue?.isAfter(endDate); // 시작일이 종료일보다 이후인 경우
            flag && setEndDate(newValue.add(1, 'd')); // 종료일을 시작일 보다 1일 이후로 설정

            onChange({
              // react hook form Controller의 onChange
              startDate: newValue.format('YYYY-MM-DD'),
              endDate: flag
                ? newValue.add(1, 'd').format('YYYY-MM-DD')
                : endDate
                ? endDate.format('YYYY-MM-DD')
                : null,
            });
          }}
          minDate={dayjs()}
          disablePast
          format="YYYY/MM/DD"
          slotProps={{
            textField: {
              helperText: 'YYYY/MM/DD',
            },
          }}
        />
        <DatePicker
          label="end date"
          value={endDate}
          onChange={(newValue) => {
            if (!newValue) return;
            setEndDate(newValue);
            onChange({
              startDate: startDate?.format('YYYY-MM-DD'),
              endDate: newValue.format('YYYY-MM-DD'),
            });
          }}
          minDate={startDate ? startDate : dayjs().add(1, 'd')}
          disablePast
          format="YYYY/MM/DD"
          slotProps={{
            textField: {
              helperText: 'YYYY/MM/DD',
            },
          }}
        />
      </div>
      {errors && <p>{errors.temp?.message}</p>}
    </>
  );
}

export default Temp;
