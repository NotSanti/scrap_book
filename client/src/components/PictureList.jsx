import { useEffect, useState } from "react";

const PictureList = () => {
  const [imgUrl, setImgUrl] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./src/data/pictures.json");
      const data = await res.json();
      //   console.log(data);
      setList(data);
      console.log(list);
      //   setImgUrl(data[0].image_url);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <h1>{list.length} pics in list</h1>
    </>
  );
};
export default PictureList;
