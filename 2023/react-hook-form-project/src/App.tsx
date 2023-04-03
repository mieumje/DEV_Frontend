import { useForm } from 'react-hook-form';
import { RangeDateInput } from '@components/Input';
import DatePicker from 'react-datepicker';
import { forwardRef, useState } from 'react';
import { ko } from 'date-fns/locale';

type FormValues = {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
  name: string;
};

function App() {
  const { control, handleSubmit, register } = useForm<FormValues>();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  const onChange = (dates: [Date | null, Date | null]) => {
    console.log(dates);
    const [start, end] = dates;
    start && setStartDate(start);
    end && setEndDate(end);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            placeholderText="시작일"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => date && setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            placeholderText="종료일"
          />
        </div>
        <RangeDateInput control={control} />
        <input
          type="text"
          {...register('name')}
          style={{ border: '1px solid black', padding: '3px' }}
        />
        <button
          type="submit"
          style={{
            border: '1px solid black',
            padding: '3px',
            width: '150px',
            height: '40px',
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
