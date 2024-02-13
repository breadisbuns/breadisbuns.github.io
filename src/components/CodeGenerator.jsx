//Value to store... Input text
//save property button with onClick func
// generate schema button with onClick

//new property button - takes you back to code generator (input fields)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyBlock, a11yLight } from 'react-code-blocks';

const CodeGenerator = () => {
  const navigate = useNavigate();
  const [schemaString, setSchemaString] = useState(``);
  const [schema, setSchema] = useState({});
  const [schemaName, setSchemaName] = useState('');

  useEffect(() => {
    // to bypass page loading blank schema string
    if (Object.keys(schema).length > 0) {
      // Generate schema string whenever schema state changes
      setSchemaString(
        `const ${schemaName} = new Schema('${schemaName}', ${JSON.stringify(
          schema,
          null,
          2
        ).replace(/"([^"]+)":/g, '$1:')});` // regex to remove quotes on properties
      );
    }
  }, [schema, schemaName]);

  const updateSchema = (e) => {
    e.preventDefault(); // so we don't refresh

    const formData = new FormData(e.target);
    // if checkbox unchecked, does not appear in entries
    const formJson = Object.fromEntries(formData.entries());

    // TODO: warn user if no property entered
    if (!formJson.propertyName) return;

    setSchemaName(formJson.schemaName);

    const newSchema = { ...schema };

    newSchema[formJson.propertyName] = { ...formJson };
    if (newSchema[formJson.propertyName].isRequired === 'on')
      newSchema[formJson.propertyName].isRequired = true;
    if (newSchema[formJson.propertyName].isUnique === 'on')
      newSchema[formJson.propertyName].isUnique = true;
    delete newSchema[formJson.propertyName].schemaName;
    delete newSchema[formJson.propertyName].propertyName;

    setSchema(newSchema);

    return;
  };

  console.log(schemaString);

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
              <option value='string[]'>string[]</option>
              <option value='number[]'>number[]</option>
              <option value='boolean'>boolean</option>
              <option value='date'>date</option>
              <option value='point'>point</option>
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
      {schemaString && (
        <CopyBlock
          text={schemaString}
          language='javascript'
          showLineNumbers={true}
          theme={a11yLight}
        />
      )}
      <button onClick={() => navigate(-1)}>Home Page</button>
    </>
  );
};
export default CodeGenerator;
