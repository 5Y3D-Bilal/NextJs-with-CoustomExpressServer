import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2 className="text-red-400 text-[20px]">This is the home page</h2>
        <p>Welcome to my Next.js app with an Express custom server.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
