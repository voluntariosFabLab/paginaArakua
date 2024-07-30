import React, { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "./images/images";
import "./Carrousel.css";

export default function CarrouselHome() {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{display: "block" }} 
        className="img-carrousel"
      />
    );
  };
/* style={{ width: "100%", display: "block", objectFit:"contain" }} */
  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div className="containerCarrousel">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        style={{width: "100%", height:"100%" }}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        circular
        autoPlay
        transitionInterval={2000}
      />
    </div>
  );
}
