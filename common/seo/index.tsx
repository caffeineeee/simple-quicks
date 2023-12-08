import React, { FC } from 'react';

import { NextSeo, NextSeoProps } from 'next-seo';

interface BaseSeoProps {
  title?: string;
}

type SEOProps = BaseSeoProps & Omit<NextSeoProps, 'title'>;

const SEO: FC<SEOProps> = (props) => {
  const { title, ...other } = props;

  return <NextSeo title={title} {...other} />;
};

export default SEO;
