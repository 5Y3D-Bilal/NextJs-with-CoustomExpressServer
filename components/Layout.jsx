import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./button";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A sample Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Button />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
