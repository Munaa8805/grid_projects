"use client";
import React, { useEffect } from "react";
import GridImage from "./GridImage";
const dataImages = [
  {
    id: -1,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737661298/IMG_3712_o92wkh.jpg",
    title: "The winner of the CUP 2024 year",
  },
  {
    id: 0,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157005/IMG_3618_ulmbyp.jpg",
    title: "The pavers are installing and cutting on the driveway.",
  },

  {
    id: 1,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157004/IMG_3674_eybdcb.jpg",
    title: "The tiles are installing and the planter boxes are building.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157004/IMG_3672_lbtd0u.jpg",
    title: "The tiles are installing and the planter boxes are building.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3675_qf7dje.jpg",
    title: "The planter boxes are building.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157004/IMG_3621_kdzg3x.jpg",
    title: "Tiles are installing and cutting on balcony. Size is 2x2 inch.",
  },

  {
    id: 5,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3620_lh0kbs.jpg",
    title: "Tiles are installing and cutting on balcony",
  },

  {
    id: 6,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3617_yv4iu8.jpg",
    title: "Base preparing, bricks installation and cutting on the pathway.",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
    title: "Base preparing and bricks are installing on the pathway.",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737660974/IMG_3700_klnwmi.jpg",
    title: "Installing the sod",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/djws6cbsg/image/upload/v1737660973/IMG_3701_ymvnk6.jpg",
    title: "Installing the sod",
  },
];

const Grids = () => {
  useEffect(() => {
    async function LoadImages() {
       const response = await fetch(
         `https://res.cloudinary.com/djws6cbsg/image/upload`,
         {
           headers: {
             Authorization: `Basic ${Buffer.from(
               process.env.CLOUDINARY_API_KEY +
                 ":" +
                 process.env.CLOUDINARY_API_SECRET
             ).toString("base64")}`,
           },
         }
       ).then((r) => r.json());

    //    return response;
    console.log("dara", response);
    }
    LoadImages();
  }, []);
  return (
    <div className="p-5 grid grid-cols-2 md:p-0 md:grid-cols-3 gap-5">
      {dataImages.map((image) => (
        <GridImage image={image} key={image.id} />
      ))}
    </div>
  );
};

export default Grids;
