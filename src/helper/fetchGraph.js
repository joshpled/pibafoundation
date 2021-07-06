const fetchGraph = (object) => {
  return fetch("http://localhost:5001/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `${object}`,
    }),
  }).then((res) => {
    res.json();
  });
};

export default fetchGraph;
