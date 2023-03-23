import { useEffect, useState } from "react";

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const $title = document.querySelector("title");

    if ($title) {
      $title.innerText = title;
    }
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
