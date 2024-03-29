import useLocalStorage from "../../hooks/useLocalStorage";

export default {
  title: 'Hooks/useLocalStorage'
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage('status', '404 NOT FOUND');

  return (
    <div>
      <button onClick={() => setStatus('200 ok')}>Resend</button>
      {status}
    </div>
  )
};