import React from "react";
import { useGlobalContext } from "../Context";

const ShortForm = () => {
  const { setInput, input, submitHandler } = useGlobalContext();

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        value={input}
        placeholder="https://www.youtube.com/...."
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Shorten it!</button>
    </form>
  );
};

export default ShortForm;
