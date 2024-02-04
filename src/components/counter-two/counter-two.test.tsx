import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import userEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
  it("should handle increment and decrement", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
