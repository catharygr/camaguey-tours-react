import React from "react";
import AdminCard from "./AdminCard";
import data from "../../data";

export default function Products() {
  const mapeo = data.map((product) => (
    <AdminCard
      key={product.id}
      title={product.title}
      summary={product.summary}
      id={product.id}
    />
  ));

  return (
    <div className="products-container">
      <button className="btn btn-blue">Añadir nuevo elemento</button>
      <div>{mapeo}</div>
    </div>
  );
}
