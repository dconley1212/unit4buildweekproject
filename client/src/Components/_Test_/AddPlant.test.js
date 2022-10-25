import AddPlant from "../AddPlant";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("AddPlant module is displaying the wrong features", () => {
  it("first input is displaying correctly on form", () => {
    render(
      <Router>
        <AddPlant />
      </Router>
    );
    const nickname = screen.getByLabelText("Nickname");
    expect(nickname).toBeInTheDocument();
  });
});
