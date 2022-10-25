import Dashboard from "../Dashboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Dashboard module is displaying correctly", () => {
  it("the title is displaying", () => {
    const title = screen.getByText("My Plants");
    expect(title).toBeInTheDocument();
  });
});
