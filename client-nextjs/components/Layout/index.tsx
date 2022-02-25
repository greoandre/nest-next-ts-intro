import Header from '../Header';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Client Next | {pageTitle}</title>
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default Layout;
