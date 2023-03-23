// import './App.css';
// import Logo from './components/Logo'
// import Paragraph from './components/Paragraph';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Logo />
//         <Paragraph>
//           Edit <code>src/App.js</code> and save to reload.
//         </Paragraph>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useCallback } from 'react';

const Checkbox = React.memo(({ label, on, onChange}) => {
  console.log(label, on);
  return (
    <label>
      {label}
      <input type="checkBox" defaultChecked={on} onChange={onChange}/>
    </label>
  )
});

function App() {
  const [catOn, setCatOn] = useState(false);
  const [hong3On, setHong3On] = useState(false);
  const [hongsamOn, setHongsamOn] = useState(false);

  const catChange = useCallback((e) => setCatOn(e.target.checked), []);
  const hong3Change = useCallback((e) => setHong3On(e.target.checked), []);
  const hongsamChange = useCallback((e) => setHongsamOn(e.target.checked), []);
  
  return (
    <div>
      <Checkbox label="cat" on={catOn} onChange={catChange}/>
      <Checkbox label="hong3" on={hong3On} onChange={hong3Change}/>
      <Checkbox label="hongsam" on={hongsamOn} onChange={hongsamChange}/>
    </div>
  );
}

export default App;