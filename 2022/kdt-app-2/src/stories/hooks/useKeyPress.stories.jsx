import useKeyPress from "../../hooks/useKeyPress";

export default {
  title: 'Hooks/useKeyPress'
};

export const Default = () => {
  const pressed = useKeyPress('?');

  return <>{pressed ? '? here' : '! here'}</>
};