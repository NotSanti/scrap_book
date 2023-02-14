import { useEffect, useState } from "react";
import Picture from "./Picture";
import styled from "styled-components";

const Random = () => {
  const [imgUrl, setImgUrl] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./src/data/pictures.json");
      const data = await res.json();
      setImgUrl(data[0].image_url);
      setDescription(data[0].description);
      setDate(data[0].date);
    };
    fetchData().catch(console.error);
  }, []);

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  const reRoll = () => {
    const fetchData = async () => {
      console.log("reroll");
      const res = await fetch("./src/data/pictures.json");
      const data = await res.json();
      console.log(data.length);
      let rand = Math.floor(Math.random() * data.length);
      console.log(rand);
      setImgUrl(data[rand].image_url);
      setDescription(data[rand].description);
      setDate(data[rand].date);
    };
    fetchData().catch(console.error);
  };

  return (
    <>
      <Picture image_url={imgUrl} description={description} date={date} />
      <Button onClick={reRoll}>Random</Button>
    </>
  );
};

export default Random;
