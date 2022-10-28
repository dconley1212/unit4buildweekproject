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
  it("paragraph explaining the lead developer is displaying", () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const firstParagraph = screen.getByText(
      "Contact Dave Conley, who is the Lead Developer."
    );
    expect(firstParagraph).toBeInTheDocument();
  });
  it("paragraph displaying email is in the document", () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const emailParagraph = screen.getByText("Email: dconley1989@gmail.com");
    expect(emailParagraph).toBeInTheDocument();
  });
});
