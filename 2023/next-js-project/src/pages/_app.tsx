import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 viewport-fit=cover"
        />
        <title>Next-JS-Project</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
