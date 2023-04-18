import React from "react";
import { Link, useParams } from "react-router-dom";
import HeroProducts from "../componentes/HeroProducts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "../data.js";

export default function ProductDetails() {
  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );

  const descriptionMD = findProduct?.description.replace(/\\n\\n/g, "\n\n");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categ = findProduct?.category;

  function backLinkText() {
    if (categ === "conocer") {
      return "/conocer";
    } else if (categ === "disfrutar") {
      return "/disfrutar";
    } else if (categ === "caminar") {
      return "/caminar";
    } else {
      return "/";
    }
  }

  return (
    <>
      <HeroProducts
        title={findProduct?.hero.heroTitle}
        price={findProduct?.price}
        text={findProduct?.hero.heroText}
        id={findProduct?.id}
      />

      <article className="details-container color-white">
        <h1>{findProduct?.title}</h1>
        <h3>{findProduct?.subtitle}</h3>
        <img src={findProduct?.imgUrl} alt={findProduct?.hero.heroText} />
        <div className="parrafo flow">
          <Link
            className="back-link color-black underline"
            to={backLinkText()}
          >{`Regresar a ${findProduct?.category}`}</Link>
          <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        </div>
        <img src={findProduct?.imgUrl2} alt={findProduct?.hero.heroText} />
      </article>
    </>
  );
}
