import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import "@testing-library/jest-native";
import App from "../src/App.jsx";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const heading = screen.getByText(/anpan is a light-weight/i);
    expect(heading).toBeInTheDocument();
  });
});
