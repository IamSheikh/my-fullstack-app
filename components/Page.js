import Head from 'next/head';
import { Fragment } from 'react';

const Page = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Fragment>
  );
};

export default Page;
