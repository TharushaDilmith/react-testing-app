import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  test("renders MuiMode component", () => {
    render(<MuiMode />, { wrapper: AppProviders });
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveTextContent("dark mode");
  });
});
