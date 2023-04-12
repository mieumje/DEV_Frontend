import { Controller, useForm } from 'react-hook-form';
import { RangeDateInput } from '@components/Input';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { ko } from 'date-fns/locale';
import RangeDatePicker from '@components/RangeDatePicker';
import Temp from '@components/RangeDatePicker/tt';
import { useNavigate } from 'react-router-dom';

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

function App() {
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<FormValues>();
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
  const navigate = useNavigate();

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
        <RangeDatePicker control={control} />
        <Controller
          control={control}
          name="temp"
          render={({
            field: { onChange, onBlur, value, ref },
            formState: { errors },
          }) => <Temp onChange={onChange} errors={errors} />}
          rules={{
            validate: (value) => {
              if (!value) return '날짜를 입력해주세요.';

              const { startDate, endDate } = value;
              if (!startDate) return '시작일을 입력해주세요.';
              if (!endDate) return '종료일을 입력해주세요.';
            },
          }}
        />
        <RangeDateInput control={control} />
        <input
          type="text"
          {...register('name', {
            required: '이름을 입력해주세요',
            minLength: {
              value: 3,
              message: '3자리 이상의 이름을 입력하세요.',
            },
          })}
          style={{ border: '1px solid black', padding: '3px' }}
        />
        {errors.name && <p>{errors.name.message}</p>}
        {/* <div style={{ display: 'flex', gap: '1rem' }}>
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
        </div> */}
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
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '16px 0',
        }}
      >
        <button
          type="button"
          style={{
            border: '1px solid black',
            padding: '3px',
            width: '150px',
            height: '40px',
          }}
        >
          Home
        </button>
        <button
          type="button"
          style={{
            border: '1px solid black',
            padding: '3px',
            width: '150px',
            height: '40px',
          }}
          onClick={() => {
            navigate('/test');
          }}
        >
          Test
        </button>
      </div>
    </div>
  );
}

export default App;
