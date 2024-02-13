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
import { useNavigate, useState } from 'react-router-dom';
import { CopyBlock, a11yLight } from 'react-code-blocks';

const CodeGenerator = () => {
  const navigate = useNavigate();

  const schema = {};
  let schemaName = '';
  let schemaString = `const ${schemaName} = new Schema('${schemaName}', 
  ${JSON.stringify(schema)}
  );`;

  const updateSchema = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // if checkbox unchecked, does not appear in entries
    const formJson = Object.fromEntries(formData.entries());
    // TODO: throw error if no property entered

    schemaName = formJson.schemaName;
    schema[formJson.propertyName] = { ...formJson };
    console.log('formJson', formJson);
    console.log('schema', schema);
    schemaString = `const ${schemaName} = new Schema('${schemaName}', 
  ${JSON.stringify(schema)}
  );`;
    return;
  };

  // const exampleSchema = `const mySchema = new Schema('mySchema', {
  //   model: { type: 'string' },
  //   modelNo: { type: 'number' },
  //   dateBought: { type: 'date' },
  //   ownerName: { type: 'text' },
  //   ownerLocation: { type: 'point' },
  //   parts: { type: 'string[]' },
  //   secret: { type: 'number[]' },
  // });`;

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
            <select name='type'>
              <option value='string'>string</option>
              <option value='number'>number</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Required: <input type='checkbox' name='isRequired' />
          </label>
        </div>
        <div>
          <label>
            Unique: <input type='checkbox' name='isUnique' />
          </label>
        </div>
        <button type='submit'>save</button>
      </form>

      <CopyBlock
        text={schemaString}
        language='javascript'
        showLineNumbers={true}
        theme={a11yLight}
      />
      <button onClick={() => navigate(-1)}>Home Page</button>
    </>
  );
};
export default CodeGenerator;
