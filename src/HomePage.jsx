import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => navigate("/CodeGenerator")}> Generate Schema</button>
    </>
  );
};

export default HomePage;
