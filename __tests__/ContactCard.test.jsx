import { render, screen } from "@testing-library/react";

import HomePage from "../src/components/HomePage.jsx";
import ContactCard from "../src/components/ContactCard.jsx";
import App from "../src/App.jsx";

describe("ContactCard", () => {
  it("renders text 'Software Engineer", () => {
    render(<ContactCard />);
    screen.getByText("Software Engineer").toBeInTheDocument;
  });
});
describe("ContactCard", () => {
  it("renders ContactCard component 'listitem'", () => {
    render(<ContactCard />);
    screen.getByRole("listitem");
  });
});
describe("ContactCard", () => {
  it("renders ContactCard component 'img", () => {
    render(<ContactCard />);
    screen.getByRole("img");
  });
});
