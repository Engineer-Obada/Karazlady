/* eslint-disable react/prop-types */
import style from "./Product.module.css";
import detox from "../../assets/skyCare/detox.jpg";
import faceMask from "../../assets/skyCare/faceMask.jpg";
import feetBalm from "../../assets/skyCare/feetBalm.jpg";
import gerlight from "../../assets/skyCare/gerlight.jpg";
import skinRestore from "../../assets/skyCare/skinRestore.jpg";

import one from "../../assets/Barfan/one.png";
import tow from "../../assets/Barfan/tow.png";
import three from "../../assets/Barfan/three.png";
import four from "../../assets/Barfan/four.jpg";
import five from "../../assets/Barfan/five.jpg";

import oneAs from "../../assets/Accessory/one.jpg";
import towAs from "../../assets/Accessory/tow.jpg";
import threeAs from "../../assets/Accessory/three.jpg";
import fourAs from "../../assets/Accessory/four.jpg";
import fiveAs from "../../assets/Accessory/five.jpg";
import Product from "./Product";
import ShowMore from "../ShowMore/ShowMore";

import B1 from "../../assets/Bags/B1.jpg";
import B2 from "../../assets/Bags/B2.jpg";
import B3 from "../../assets/Bags/B3.jpg";
import B4 from "../../assets/Bags/B4.jpg";
import B5 from "../../assets/Bags/B5.jpg";
import B6 from "../../assets/Bags/B6.jpg";

import M2 from "../../assets/Makeup/M2.jpg";
import M1 from "../../assets/Makeup/M1.jpg";
import M3 from "../../assets/Makeup/M3.jpg";
import M4 from "../../assets/Makeup/M4.jpg";
import M5 from "../../assets/Makeup/M5.jpg";
import M6 from "../../assets/Makeup/M6.jpg";

import O2 from "../../assets/Oil/O2.jpg";
import O1 from "../../assets/Oil/O1.jpg";
import O3 from "../../assets/Oil/O3.jpg";
import O4 from "../../assets/Oil/O4.jpg";
import O5 from "../../assets/Oil/O5.jpg";
import O6 from "../../assets/Oil/O6.jpg";
function Products({setCount,count}) {
  const product = [
    {
      category: "Product SkinCare",
      items: [
        {
          src: feetBalm,
          name: "Feet Balm",
          price: 4000,
        },
        {
          src: gerlight,
          name: "Ger Light",
          price: 22000,
        },
        {
          src: detox,
          name: "Detox",
          price: 152000,
        },
        {
          src: detox,
          name: "Detox",
          price: 152000,
        },
        {
          src: faceMask,
          name: "Face Mask",
          price: 152000,
        },
        {
          src: skinRestore,
          name: "Skin Restore",
          price: 22000,
        },
      ],
    },
    {
      category: "Product Barfan",
      items: [
        {
          src: one,
          name: "Splah",
          price: 4000,
        },
        {
          src: tow,
          name: "Splash Flower",
          price: 22000,
        },
        {
          src: three,
          name: "Splash Blue",
          price: 152000,
        },
        {
          src: four,
          name: "Details",
          price: 152000,
        },
        {
          src: five,
          name: " Alma p1",
          price: 22000,
        },
        {
          src: five,
          name: " Alma p1",
          price: 22000,
        },
      ],
    },
    {
      category: "Product Accessory",
      items: [
        {
          src: oneAs,
          name: "Splah",
          price: 4000,
        },
        {
          src: towAs,
          name: "Splash Flower",
          price: 22000,
        },
        {
          src: threeAs,
          name: "Splash Blue",
          price: 152000,
        },
        {
          src: fourAs,
          name: "Details",
          price: 152000,
        },
        {
          src: fiveAs,
          name: " Alma p1",
          price: 22000,
        },
        {
          src: fiveAs,
          name: " Alma p1",
          price: 22000,
        },
      ],
    },
    {
      category: "Product Bags",
      items: [
        {
          src: B1,
          name: "Crystal bag",
          price: 4000,
        },
        {
          src: B2,
          name: "Crystal bag with satin handle",
          price: 22000,
        },
        {
          src: B3,
          name: "ALDO Crystal Bag",
          price: 152000,
        },
        {
          src: B4,
          name: "Corrugated crystal bag",
          price: 152000,
        },
        {
          src: B5,
          name: "Crystal bag",
          price: 22000,
        },
        {
          src: B6,
          name: " Alma p1",
          price: 22000,
        },
      ],
    },
    {
      category: "Product Makeup",
      items: [
        {
          src: M1,
          name: "Volare eyeshadow 1",
          price: 4000,
        },
        {
          src: M2,
          name: "Volare eyeshadow 2",
          price: 22000,
        },
        {
          src: M3,
          name: "Volare eyeshadow 3",
          price: 152000,
        },
        {
          src: M4,
          name: "Volare eyeshadow 4",
          price: 152000,
        },
        {
          src: M5,
          name: "Volare eyeshadow 5",
          price: 22000,
        },
        {
          src: M6,
          name: " Volare eyeshadow 6",
          price: 22000,
        },
      ],
    },
    {
      category: "Product Oil",
      items: [
        {
          src: O1,
          name: "Anise oil",
          price: 4000,
        },
        {
          src: O2,
          name: "Cress oil",
          price: 22000,
        },
        {
          src: O3,
          name: "Mustard oil",
          price: 152000,
        },
        {
          src: O4,
          name: "Cumin oil",
          price: 152000,
        },
        {
          src: O5,
          name: "Thyme oil",
          price: 22000,
        },
        {
          src: O6,
          name: "Fenugreek oil",
          price: 22000,
        },
      ],
    },
  
  ];

  return (
    <>
      <div className={style.container}>
        {product.map((category, categoryIndex) => (
          <>
            <ShowMore name={category.category} />

            <div
              style={{ display: "flex", justifyContent: "space-between",flexWrap:'wrap' }}
              key={categoryIndex}
            >
              {category.items.map((item, itemIndex) => (
                <Product  item={item} key={itemIndex} setCount={setCount} count={count}/>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Products;
