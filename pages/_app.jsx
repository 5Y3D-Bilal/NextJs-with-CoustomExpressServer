import React from 'react';
import Layout from '../components/Layout';
import './globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
};

export default MyApp;
