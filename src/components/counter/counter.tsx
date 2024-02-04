import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set Count</button>
    </div>
  );
};
