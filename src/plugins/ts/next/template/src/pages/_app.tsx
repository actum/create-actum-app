import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

const App: React.FC<AppProps> = ({ Component }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,700&amp;subset=latin-ext"
          rel="stylesheet"
        />
      </Head>
      <Component />
    </>
  );
};

export default App;
