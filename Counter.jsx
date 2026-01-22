import { useEffect, useState } from "react";

export function Counter({ step }: { step: number }) {
  const [count, setCount] = useState(0);

  const unused = 123; // ❌ @typescript-eslint/no-unused-vars

  useEffect(() => {
    setCount(count + step);
  }, []); // ❌ react-hooks/exhaustive-deps (count, step)

  return <div>{count}</div>;
}
