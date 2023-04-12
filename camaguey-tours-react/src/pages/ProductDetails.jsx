import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";
import HeroProducts from "../componentes/HeroProducts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ProductDetails() {
  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );

  const descriptionMD = findProduct?.description.replace(/\\n\\n/g, "\n\n");
  // const {
  //   title,
  //   subtitle,
  //   hero: { heroTitle, heroText },
  //   imgUrl,
  //   price,
  //   description,
  //   imgUrl2,
  // } = findProduct;

  console.log(findProduct);
  return (
    <>
      <HeroProducts
        title={findProduct?.hero.heroTitle}
        price={findProduct?.price}
        text={findProduct?.hero.heroText}
      />

      <article className="details-container color-white">
        <h1>{findProduct?.title}</h1>
        <h3>{findProduct?.subtitle}</h3>
        <img src={findProduct?.imgUrl} alt={findProduct?.hero.heroText} />
        <div className="parrafo flow">
          <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        </div>
        <img src={findProduct?.imgUrl2} alt={findProduct?.hero.heroText} />
      </article>
    </>
  );
}
