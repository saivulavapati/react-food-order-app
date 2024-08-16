import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component Test casess", () => {
  test("Should render the Contact component", () => {
    render(<Contact />);
  });

  test("should have heading element in the Contact Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should have input name element in the Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should have submit button in the Contact Component", () => {
    render(<Contact />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument(submitButton);
  });
});
