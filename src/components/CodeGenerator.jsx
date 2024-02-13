//where user will add to fields to generate a schema
    //property name... Input text
    //data type field... Drop Down
      // string, boolean, number, date, point, string[], number[]
    //Is Required field... Yes/No
    //Value to store... Input text
//save property button with onClick func
// generate schema button with onClick

//Research Code Mirror Embedding...Display Snippets
//new property button - takes you back to code generator (input fields)

import React from "react";
import { useNavigate } from "react-router-dom";

const CodeGenerator = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Generate Schema Here</h1>
      <button onClick={()=> navigate(-1)}>Home Page</button>
    </>
  );
};
export default CodeGenerator;