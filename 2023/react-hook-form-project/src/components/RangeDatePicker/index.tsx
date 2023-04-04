import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

type FormValues = {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
  mui: {
    startDate: Date;
    endDate: Date;
  };
  name: string;
};

type Props = {
  control: Control<FormValues>;
};

function RangeDatePicker({ control }: Props) {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'd'));

  return (
    <Controller
      control={control}
      name="mui"
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <div>
          <DatePicker
            label="시작일"
            value={startDate}
            onChange={(newValue) => {
              if (newValue) {
                const flag =
                  newValue?.isAfter(endDate) ||
                  newValue.format('YYYY-MM-DD') ===
                    endDate.format('YYYY-MM-DD');
                flag && setEndDate(newValue.add(1, 'd'));
                newValue && setStartDate(newValue);
                console.log(value);
                onChange({
                  startDate: newValue.format('YYYY-MM-DD'),
                  endDate: newValue.add(1, 'd').format('YYYY-MM-DD'),
                });
              }
            }}
            minDate={dayjs()}
            disablePast
            format="YYYY/MM/DD"
          />
          <DatePicker
            label="종료일"
            value={endDate}
            onChange={(newValue) => {
              if (newValue) {
                setEndDate(newValue);
                console.log(value);
                onChange({
                  startDate: startDate.format('YYYY-MM-DD'),
                  endDate: newValue.format('YYYY-MM-DD'),
                });
              }
            }}
            minDate={startDate}
            disablePast
            format="YYYY/MM/DD"
          />
        </div>
      )}
    />
  );
}

export default RangeDatePicker;
