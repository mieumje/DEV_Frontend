/** @jsxImportSource @emotion/react */
import Box from "./components/Box";
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

function App() {
  return (
    <div>
      <SomeComponent />
      <Box bgColor="red"/>
    </div>
  );
}

export default App;
