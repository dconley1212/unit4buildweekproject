import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("elements are displaying correctly in Contact Component", () => {
  it("title is displaying", () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const title = screen.getByText("Questions? Something went wrong?");
    expect(title).toBeInTheDocument();
  });
});
