import { useEffect, useState } from "react";
import "../style/Picture.css";

const Picture = (props) => {
  return (
    <div className="picture">
      <img src={props.image_url} alt="picture" />
      <h3>{props.description}</h3>
      <h4>{props.date}</h4>
    </div>
  );
};
export default Picture;
