import { useEffect, useState } from "react";
import classes from "./counter.module.scss";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className={classes.btn}>
      <button onClick={() => setCount(count + 1)}>incriment</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Counter;
