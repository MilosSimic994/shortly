import React, { useContext, useEffect, useState } from "react";

const url = `https://api.shrtco.de/v2/shorten?url=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [shortURL, setShortURL] = useState([{ old: "", new: "" }]);
  const [searchURL, setSearchURL] = useState("");

  const fetchShortUrl = async () => {
    try {
      const res = await fetch(`${url}${searchURL} `);
      const data = await res.json();
      //create new object
      setShortURL([
        ...shortURL,
        { new: data.result.full_short_link, old: searchURL },
      ]);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setSearchURL(input);

    console.log(searchURL);

    setInput("");
  };
  //call fetch if search change, on submit
  useEffect(() => {
    if (searchURL) {
      setSearchURL("");
      fetchShortUrl();
    } else {
      return;
    }
  }, [searchURL]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppContext.Provider
      value={{
        shortURL,
        setShortURL,

        input,
        setInput,

        submitHandler,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
