import '../styles/global.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Navbar /> */} {/* Komentari ini sampai Langkah 5 */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;