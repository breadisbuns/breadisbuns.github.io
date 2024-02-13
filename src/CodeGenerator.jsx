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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyBlock, atomOneDark } from 'react-code-blocks';

const CodeGenerator = () => {
  const navigate = useNavigate();

  const generatedSchema = {};

  const updateSchema = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // if checkbox unchecked, does not appear in entries
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
    return;
  };

  const exampleSchema = `const mySchema = new Schema('mySchema', {
    model: { type: 'string' },
    modelNo: { type: 'number' },
    dateBought: { type: 'date' },
    ownerName: { type: 'text' },
    ownerLocation: { type: 'point' },
    parts: { type: 'string[]' },
    secret: { type: 'number[]' },
  });`;

  return (
    <>
      <h1>Generate Schema Here</h1>
      <form onSubmit={updateSchema}>
        <div>
          <label>
            Schema Name: <input name='schemaName' />
          </label>
        </div>
        <div>
          <label>
            Property Name: <input name='propertyName' />
          </label>
        </div>
        <div>
          <label>
            type:{' '}
            <select name='dataType'>
              <option value='string'>string</option>
              <option value='number'>number</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Required: <input type='checkbox' name='requiredCheckbox' />
          </label>
        </div>
        <div>
          <label>
            Unique: <input type='checkbox' name='uniqueCheckbox' />
          </label>
        </div>
        <button type='submit'>save</button>
      </form>

      <CopyBlock
        text={exampleSchema}
        language='javascript'
        showLineNumbers={true}
        theme={atomOneDark}
      />
      <button onClick={() => navigate(-1)}>Home Page</button>
    </>
  );
};
export default CodeGenerator;
