import React,{useContext} from "react";
import Image from "../images";
import { getClass } from "./Unit";
import { Context } from "../Context"

function Photos() {
  const { allPhotos } = useContext(Context);


  const imageElements = allPhotos.map((img, i) => (
    <image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
