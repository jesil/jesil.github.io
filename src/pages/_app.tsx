import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import Particles from 'react-particles';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Particles/>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
