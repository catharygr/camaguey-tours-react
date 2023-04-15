import React from "react";
import Subselect from "../componentes/Subselect";
import CardProduct from "../componentes/CardProduct";
import data from "../data";
import { useSearchParams } from "react-router-dom";

export default function SkiLayout() {
  const props = {
    to1: "camaguey",
    to2: "santalucia",
    btn1: "Camagüey",
    btn2: "Playa Santa Lucia",
    title: "Elige tu opción",
  };

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "conocer") {
      return product;
    } else if (typeFilter === product.type) {
      return product;
    }
  });

  const mapear = dataFilter.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardProduct key={id} card={{ id, title, imgUrl, summary }} />;
  });
  return (
    <>
      <Subselect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
