import useKey from "../../hooks/useKey";

export default {
  title: 'Hooks/useKey'
};

export const Default = () => {
  useKey("keydown", "-", () => {
    console.log('key down here');
  });

  useKey("keyup", "=", () => {
    console.log('key up here');
  });
  return <>useKey</>
};