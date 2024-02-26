import { render, screen, fireEvent } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";

import CodeGenerator from "../src/components/CodeGenerator.jsx";
import { CodeBlock, CopyBlock, a11yLight } from "react-code-blocks";

describe("CodeGenerator", () => {
  it("checks for 'save' in the CodeGenerator component", () => {
    render(<CodeGenerator />);
    screen.getByText("save").toBeInTheDocument;
  });
});
describe("CodeGenerator", () => {
  it("checks for 'Generate Schema' in the CodeGenerator component", () => {
    render(<CodeGenerator />);
    screen.getByText("Generate Schema").toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for 'Schema Name' in the CodeGenerator component", () => {
    render(<CodeGenerator />);
    screen.getByText("Schema Name:").toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for 'Property Name' in the CodeGenerator component", () => {
    render(<CodeGenerator />);
    screen.getByText("Property Name:").toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for 'Type' in the CodeGenerator component", () => {
    render(<CodeGenerator />);
    screen.getByText("Type:").toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for a button to be in the document", () => {
    render(<CodeGenerator />);
    screen.getByRole("button").toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for a textbox with name 'Property Name:' to be in the document", () => {
    render(<CodeGenerator />);
    screen.getByRole("textbox", { name: /Property Name:/ }).toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks for a textbox with name 'Schema Name:' to be in the document", () => {
    render(<CodeGenerator />);
    screen.getByRole("textbox", { name: /Schema Name:/ }).toBeInTheDocument;
  });
});

describe("CodeGenerator", () => {
  it("checks to see if the input values of 'schemaName' and 'propertyName' appear in the document after the 'save' button has been clicked", async () => {
    render(<CodeGenerator />);

    const schemaNameBoxInput = screen.getByRole("textbox", {
      name: /Schema Name:/,
    });
    const propertyNameBoxInput = screen.getByRole("textbox", {
      name: /Property Name:/,
    });
    const saveButton = screen.getByText("save");

    fireEvent.change(schemaNameBoxInput, {
      target: { value: "mySchemaName" },
    });
    fireEvent.change(propertyNameBoxInput, {
      target: { value: "myPropertyName" },
    });
    fireEvent.click(saveButton);

    const TheSchemaName = await screen.findByText(/mySchemaName/);
    expect(TheSchemaName).toBeInTheDocument;

    const ThePropertyName = await screen.findByText(/myPropertyName/);
    expect(ThePropertyName).toBeInTheDocument;
  });
});
