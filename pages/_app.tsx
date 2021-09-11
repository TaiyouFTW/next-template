import type { AppProps } from 'next/app';
import type { Page } from '../types/page';
import '../styles/globals.scss';

type Props = AppProps & {
  Component: Page;
};

export default function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
