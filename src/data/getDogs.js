export const getShelterLuv = async () => {
  let resp = await fetch("https://www.shelterluv.com/api/v1/animals", {
    headers: {
      "X-API-KEY": "1f99ddc5-2942-4b42-ae52-368fda549313",
    },
  });
  let respData = await resp.json();
  return await respData.animals;
};
