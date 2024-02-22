import React, { useState, useEffect } from "react";
import { CopyBlock, a11yLight } from "react-code-blocks";

const CodeGenerator = () => {
	const [schemaString, setSchemaString] = useState(``);
	const [schema, setSchema] = useState({});
	const [schemaName, setSchemaName] = useState("");

	useEffect(() => {
		// to bypass page loading blank schema string
		if (Object.keys(schema).length > 0) {
			// Generate schema string whenever schema state changes
			setSchemaString(
				`const ${schemaName} = new Schema('${schemaName}', ${JSON.stringify(
					schema,
					null,
					2
				).replace(/"([^"]+)":/g, "$1:")});`
				// regex to remove quotes on properties
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
		if (newSchema[formJson.propertyName].isRequired === "on")
			newSchema[formJson.propertyName].isRequired = true;
		if (newSchema[formJson.propertyName].isUnique === "on")
			newSchema[formJson.propertyName].isUnique = true;
		delete newSchema[formJson.propertyName].schemaName;
		delete newSchema[formJson.propertyName].propertyName;

		setSchema(newSchema);

		return;
	};

	return (
		<div className="codePage">
			<section className="form-container">
				<section className="propertyGenerator">Generate Schema</section>
				<section className="formBox">
					<form onSubmit={updateSchema}>
						<div className="labels">
							<label>
								Schema Name: <input name="schemaName" className="input-field" />
							</label>
						</div>
						<div className="labels">
							<label>
								Property Name:{" "}
								<input name="propertyName" className="input-field" />
							</label>
						</div>
						<div className="options">
							<label>
								Type:{" "}
								<select name="type" className="dropdown">
									<option value="string">string</option>
									<option value="number">number</option>
									<option value="string[]">string[]</option>
									<option value="number[]">number[]</option>
									<option value="boolean">boolean</option>
									<option value="date">date</option>
									<option value="point">point</option>
								</select>
							</label>
						</div>
						<div className="required">
							<label>
								Required:{" "}
								<input
									type="checkbox"
									name="isRequired"
									className="input-field"
								/>
							</label>
						</div>
						<div className="unique">
							<label>
								Unique:{" "}
								<input
									type="checkbox"
									name="isUnique"
									className="input-field"
								/>
							</label>
						</div>
						<button className="saveBtn" type="submit">
							save
						</button>
					</form>
					{schemaString && (
						<CopyBlock
							className="copyBlock"
							text={schemaString}
							language="javascript"
							showLineNumbers={true}
							theme={a11yLight}
						/>
					)}
				</section>
			</section>
		</div>
	);
};

export default CodeGenerator;