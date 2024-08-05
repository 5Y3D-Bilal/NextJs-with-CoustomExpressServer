import React, { useState, useEffect } from "react";
const axios = require("axios");

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3500/api/hello");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header>
      <h1 className="text-[40px] text-red-400">
        Welcome to My Next.js App <span className="text-blue-500">{data ? data.message : "Loading..."}</span>
      </h1>
    </header>
  );
};

export default Header;
