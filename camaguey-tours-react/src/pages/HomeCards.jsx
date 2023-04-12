import React from "react";
import CardHomePage from "../componentes/CardHomePage";

export default function HomeCards() {
  const dataCards = [
    {
      title: "Conocer la ciudad de Camagüey",
      url: "/conocer",
      imgUrl: "/assets/images/conocer.jpg",
      description:
        "Disfrute de Camagüey se quedará a gusto con su cultura y deslumbramineto",
    },
    {
      title: "Disfrutar de la Playa Santa Lucia",
      url: "/disfrutar",
      imgUrl: "/assets/images/santa-lucia1.jpg",
      description:
        "¿Quieres disfrutar de una comida cerca de la playa? Obtenga nuestro recorrido y sepa qué y dónde comer. Todo reservado con antelación, desayuno, almuerzo, cena. Y dulces.",
    },
    {
      title: "Caminata por la ciudad de Camagüey",
      url: "/caminar",
      imgUrl: "/assets/images/caminar.jpg",
      description:
        "Más de 300 km de caminos panorámicos y naturaleza en Camagüey para uno o si te atreves para aventuras de varios días...",
    },
    {
      title: "Visita todos los lugares históricos importantes.",
      url: "/caminar",
      imgUrl: "/assets/images/camaguey-ciudad.png",
      description:
        "No pierdas tiempo buscando lugares importantes, obtén nuestras guías detalladas con navegación GPS...",
    },
  ];

  const mapear = dataCards.map((card) => {
    const { title, imgUrl, description, url } = card;
    return (
      <CardHomePage
        key={card.imgUrl}
        card={{ title, imgUrl, description, url }}
      />
    );
  });

  return <div className="home-card-grid">{mapear}</div>;
}
