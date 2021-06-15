import React, { useState, useEffect } from "react";
import { DogTable, NewDog } from "components";
import AdminNavigation from "../components/Navigation/AdminNavigation";
function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [dogtable, setDogTable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading((prevState) => !prevState);
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://www.shelterluv.com/api/v1/animals", {
      headers: {
        "X-API-KEY": "1f99ddc5-2942-4b42-ae52-368fda549313",
      },
      signal: signal,
    })
      .then((resp) => resp.json())
      .then((data) => setDogs(data.animals))
      .catch((err) => {
        console.log(err);
      });
    setLoading((prevState) => !prevState);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleHide = () => {
    setDogTable((prevState) => !prevState);
  };
  return (
    <div>
      Dogs Page
      {loading && <div>LOADING!!</div>}
      <button onClick={handleHide}>Hide</button>
      <div style={{ display: dogtable ? "none" : "" }}>
        <DogTable />
      </div>
      <NewDog />
    </div>
  );
}

export default Dogs;
