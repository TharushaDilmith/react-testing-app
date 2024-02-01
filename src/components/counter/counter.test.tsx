import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("renders Counter component", () => {
    render(<Counter />);
    const headerElement = screen.getByRole("heading", { name: "Counter" });
    expect(headerElement).toBeInTheDocument();
    const countElement = screen.getByText(/Count:/);
    expect(countElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders count value", () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count: 0/);
    expect(countElement).toBeInTheDocument();
  });

  test("renders increment button", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders a count value of 1 when increment button is clicked", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(buttonElement);
    const countElement = screen.getByText(/Count: 1/);
    expect(countElement).toBeInTheDocument();
  });

  test("renders a count value of 2 when increment button is clicked twice", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(buttonElement);
    await userEvent.click(buttonElement);
    const countElement = screen.getByText(/Count: 2/);
    expect(countElement).toBeInTheDocument();

  });
});
