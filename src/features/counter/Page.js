import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrease, increase } from "./counterSlice";

const Page = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </div>
  );
};

export default Page;
