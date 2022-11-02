import { useEffect, useState } from "react";
import fetchDummy from "./apis/fetchDummy";
import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";

interface content {
  tab: string;
  content: string;
}

function App() {
  const [value, setValue] = useInput("");
  const [contents, setContents] = useState<content[]>([]);
  const { currentItem, changeItem } = useTabs(1, contents);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDummy();
        setContents(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <input placeholder="Name" value={value} onChange={setValue} />
      <div>
        {contents.map((item, index) => {
          return (
            <button onClick={() => changeItem(index)} key={index}>
              {item.tab}
            </button>
          );
        })}
        <div>{currentItem?.content}</div>
      </div>
    </>
  );
}

export default App;
