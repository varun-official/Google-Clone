/** custom Hooks */
/** @format */

import React, { useEffect, useState } from "react";

const CONTEXT_KEY = "30cef69b9866651ad";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      ).then(response => response.json())
      .then(result =>{
          setData(result)
      })
    }
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
