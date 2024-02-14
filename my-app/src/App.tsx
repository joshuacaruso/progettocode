import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  const valueColor = count < 0 ? "red" : "black";
  return (
    <div>
      <button onClick={inc}>Aumenta</button>
      <span style={{ color: valueColor }}>{count}</span>
      <button onClick={dec}>Diminuisci</button>
    </div>
  );
}
