import { useEffect, useRef } from "react";

const useClick = (onClick: {
  (): void;
  (this: HTMLDivElement, ev: MouseEvent): any;
}) => {
  const element = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const { current } = element;

    if (!current) return;

    current.addEventListener("click", onClick);

    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default useClick;
