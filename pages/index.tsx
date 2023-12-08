import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import 'twin.macro';

import Home from '@/components/Container/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content={''} />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
