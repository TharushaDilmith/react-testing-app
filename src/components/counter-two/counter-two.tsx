import { CounterTwoProps } from "./counter-two.types";

export const CounterTwo = ({
  count,
  increment,
  decrement,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <h2>{count}</h2>
      {increment && <button onClick={increment}>Increment</button>}
      {decrement && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};
