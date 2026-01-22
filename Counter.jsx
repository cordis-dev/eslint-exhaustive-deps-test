import { useEffect, useState } from "react";

export function Counter({ step }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + step);
  }, []); // ❌ missing dependencies: count, step

  return <div>{count}</div>;
}
