import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Control, Controller } from 'react-hook-form';
import { ko } from 'date-fns/locale';
import addDays from 'date-fns/addDays';

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

function RangeDateInput({ control }: Props) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  return (
    <Controller
      control={control}
      name="dateRange"
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <DateRange
          editableDateInputs={false}
          onChange={(range) => {
            const { startDate, endDate, key } = range.selection;
            if (!!startDate && !!endDate && !!key) {
              const pickedRangeDate = [
                {
                  startDate,
                  endDate,
                  key,
                },
              ];
              setState(pickedRangeDate);
            }
            onChange(range.selection);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          direction="horizontal"
          locale={ko}
          showPreview={false}
        />
      )}
    />
  );
}

export default RangeDateInput;
