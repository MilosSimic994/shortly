import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const ShortUrl = () => {
  const { shortURL } = useGlobalContext();
  const copied = useRef("");

  const copyHandler = (e) => {
    navigator.clipboard.writeText(
      e.currentTarget.previousElementSibling.textContent
    );
    console.log(e.currentTarget.previousElementSibling.textContent);

    e.target.classList.toggle("copied");
    setTimeout(() => {
      e.target.classList.remove("copied");
      e.target.innerText = "Copy";
    }, 3000);
    if (e.target.classList.contains("copied")) {
      e.target.innerText = "Copied";
    } else {
      e.target.innerText = "Copy";
    }
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
            <button onClick={copyHandler}>Copy</button>
          </div>
        );
      })}
    </section>
  );
};

export default ShortUrl;
