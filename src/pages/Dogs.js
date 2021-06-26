// import React, { useState, useEffect } from "react";
// import { DogTable, NewDog } from "components";
// import axios from "axios";

function Dogs() {
  return <div>Dogs Page</div>;
}

export default Dogs;

/*
 const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCards, setshowCards] = useState(false);
  const [showNewDogForm, setshowNewDogForm] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading((prevState) => !prevState);
    (async () => {
      try {
        const resp = await axios("https://www.shelterluv.com/api/v1/animals", {
          headers: {
            "X-API-KEY": "1f99ddc5-2942-4b42-ae52-368fda549313",
          },
          signal: signal,
        });

        setDogs(
          resp.data.animals.map(
            (
              {
                Age,
                Breed,
                Color,
                CoverPhoto,
                CurrentWeightPounds,
                DOBUnixTime,
                Description,
                ID,
                InFoster,
                LastIntakeUnixTime,
                LastUpdatedUnixTime,
                Name,
                Pattern,
                Photos,
                Sex,
                Size,
                Status,
                Type,
              },
              key
            ) => {
              let dob = new Date(DOBUnixTime * 1000);
              let formatDate = `${dob.getMonth()}/${dob.getFullYear()}`;
              return {
                id: key,
                Age,
                Breed,
                Color,
                CoverPhoto,
                CurrentWeightPounds: CurrentWeightPounds ? `${CurrentWeightPounds} lbs` : "",
                DOBUnixTime: formatDate,
                Description,
                ID,
                InFoster: InFoster ? "Yes" : "No",
                LastIntakeUnixTime,
                LastUpdatedUnixTime,
                Name,
                Pattern,
                Photos: Photos[0],
                Sex,
                Size,
                Status,
                Type,
              };
            }
          )
        );
      } catch (error) {
        console.error(error);
      }

      setLoading((prevState) => !prevState);
    })();

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleCheck = (e) => {
    setshowCards((prevState) => !prevState);
  };
  const handleShowForm = (e) => {
    setshowNewDogForm((prevState) => !prevState);
  };

  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);
*/
