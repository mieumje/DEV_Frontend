import { Global, css } from '@emotion/react';

export const reset = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    color: #111827;

    padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
      env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }
`;

function GlobalStyle() {
  return <Global styles={reset} />;
}

export default GlobalStyle;
