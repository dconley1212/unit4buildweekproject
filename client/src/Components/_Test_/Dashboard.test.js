import Dashboard from "../Dashboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Dashboard module is displaying correctly", () => {
  it("the title is displaying", () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );
    const title = screen.getByText("My Plants");
    expect(title).toBeInTheDocument();
  });
  it("they button is displaying correctly", () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );
    const button = screen.getByRole("button", { name: "Add Plant Card" });
    expect(button).toBeInTheDocument();
  });
});
