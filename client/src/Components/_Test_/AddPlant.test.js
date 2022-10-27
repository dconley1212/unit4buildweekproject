import AddPlant from "../AddPlant";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("AddPlant module is displaying the wrong features", () => {
  it("first input label is displaying correctly on form", () => {
    render(
      <Router>
        <AddPlant />
      </Router>
    );
    const nickname = screen.getByLabelText("Nickname:");
    expect(nickname).toBeInTheDocument();
  });
  it("second input label is displaying correctly on form", () => {
    render(
      <Router>
        <AddPlant />
      </Router>
    );
    const species = screen.getByLabelText("Species:");
    expect(species).toBeInTheDocument();
  });
  it("third input label is displaying correctly", () => {
    render(
      <Router>
        <AddPlant />
      </Router>
    );
    const h20Frequency = screen.getByLabelText("h20 Frequency:");
    expect(h20Frequency).toBeInTheDocument();
  });
  it("Add plant button is rendering correctly", () => {
    render(
      <Router>
        <AddPlant />
      </Router>
    );
    const addPlantButton = screen.getByRole("button", { name: "Add Plant" });
    expect(addPlantButton).toBeInTheDocument();
  });
});
