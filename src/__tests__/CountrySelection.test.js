import { render, screen } from "@testing-library/react";
import CountrySelection from "../countrySelection/CountrySelection";

test("render countru selection components", () => {
  render(<CountrySelection />);
  const element = screen.getByText("Entry Country");
  expect(element).toBeInTheDocument();
});
