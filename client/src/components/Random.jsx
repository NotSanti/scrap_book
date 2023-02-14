import { useEffect, useState } from "react";

const Random = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./src/data/pictures.json");
      console.log(res);
      const data = await res.json();
      console.log(data[0].image_url);
      setApiData(data[0].image_url);

      // setApiData(res);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <h1> random component </h1>
      <img src={apiData} />
    </>
  );
};

export default Random;
