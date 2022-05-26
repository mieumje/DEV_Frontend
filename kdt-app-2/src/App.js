import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const [catOn, setCatOn] = useState(false);
  const [hong3On, setHong3On] = useState(false);
  const [hongsamOn, setHongsamOn] = useState(false);

  const catChange = (e) => setCatOn(e.target.checked);
  const hong3Change = (e) => setHong3On(e.target.checked);
  const hongsamChange = (e) => setHongsamOn(e.target.checked);
  
  return (
    <div>
      <Checkbox label="cat" on={catOn} onChange={catChange}/>
      <Checkbox label="hong3" on={hong3On} onChange={hong3Change}/>
      <Checkbox label="hongsam" on={hongsamOn} onChange={hongsamChange}/>
    </div>
  );
}

export default App;
