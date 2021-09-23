import React, { useRef, useState } from "react";
import { useGlobalContext } from "../Context";

const ShortUrl = () => {
  const { shortURL } = useGlobalContext();
  const copied = useRef("");
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(copied.current.textContent);
    setIsCopied(true);
  };

  console.log(shortURL);
  return (
    <section className="list">
      {shortURL.map((item, index) => {
        if (!item.old || !item.new) {
          return null;
        }
        return (
          <div key={index} className="link-control">
            <li>{item.old}</li>
            <li ref={copied}>{item.new}</li>
            <button
              onClick={copyHandler}
              className={isCopied ? `copied` : null}>
              {isCopied ? `copied!` : `copy`}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ShortUrl;
