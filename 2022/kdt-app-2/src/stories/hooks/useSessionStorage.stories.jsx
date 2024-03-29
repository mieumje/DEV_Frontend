import useSessionStorage from "../../hooks/useSessionStorage";

export default {
  title: 'Hooks/useSessionStorage'
};

export const Default = () => {
  const [status, setStatus] = useSessionStorage('status', '404 NOT FOUND');

  return (
    <div>
      <button onClick={() => setStatus('200 ok')}>Resend</button>
      {status}
    </div>
  )
};