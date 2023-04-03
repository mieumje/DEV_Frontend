import { useForm } from 'react-hook-form';
import { RangeDateInput } from '@components/Input';

type FormValues = {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
  name: string;
};

function App() {
  const { control, handleSubmit, register } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
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
