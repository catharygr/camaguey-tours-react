import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import CardHomePage from "../componentes/CardHomePage";

export default function About() {
  return (
    <div className="background-color-about">
      <div className="about-layout home-layout-pink">
        <Header color="color-white" />

        <div className="form-container-about box-shadow-pink">
          <div className="form-contact">
            <h1 className="ff-title fs-700 linea-text color-white">
              Sobre este proyecto, stack tecnológico, problemas y soluciones
            </h1>
          </div>
        </div>

        <article className="about-container color-white">
          <h1>Proyecto hecho con React</h1>
          <h3>React 18, React router 6, CSS, HTML, Netlify.</h3>
          <div className="about-card">
            <CardHomePage
              card={{
                url: "#",
                title: "Mi portafolio",
                summary:
                  "Proyecto Camagüey Tours página web de una imaginaria aplicación sobre una tienda online de venta de guias a turistas.",
                imgUrl: "./assets/images/caty-emoji.jpg",
              }}
            />
          </div>
          <div className="parrafo flow">
            <h2 className="ff-title fs-700">CSS</h2>
            <p>
              El uso de flexbox, grid, container-query, fuentes variables, css
              variables, clip-path
            </p>
            <p>
              A base del diseño que he recibido, he decidido usar las siguientes
              herramientas para los componentes que contienen layout, he
              ustilizado display grid y flex, para ajustar los container he
              usado container que permite aplicar estilos a un elemento en
              función del tamaño del contenedor del elemento. Las fuentes
              variables la hemos usados para declaraciones de propiedades
              personalizadas.
            </p>
            <h2 className="ff-title fs-700"> React router 6</h2>
            <p>
              Usando rutas nidadas, rutas relativas, Outles, Link, NavLink,
              parámetros de búsquedas, useLocation, redering condicional,
              useNavigate
            </p>
            <p>
              Con el uso de las rutas nidadas y relativas permite crear una
              navegación dinámica. Con el componente Outlet se estable un
              espacio vacio dentro de los componentes donde se renderiza el
              resultado de una ruta. Con el componente Link que acepta la
              propiedad to para especificar a dónde queremos en que enlace
              navegue el usuario, usando el componente NavLink se aplica algunos
              estilos especiales. Con los parametros de busquedas como por
              ejemplo useSearchParams para leer los parámetros de búqueda de
              cadena de consulta que necesitamos en URL. El hook useLocation se
              localiza datos de ubicación. Con el rederizado condicional se crea
              elementos representado el estado actual. Con el uso de useNavigate
              devolvió una función que permitió navegar mediante la
              programación.
            </p>
            <h2 className="ff-title fs-700"> React 18</h2>
            <p>
              Componentes, props, formularios con estado, useEffect, useStates,
              createContext, useRef, createContext
            </p>
            <p>
              Con el uso de los componentes lo separa del interfaz de usuario,
              reutilizándolos y pasándoles props. El formulario como un
              componente controlado. Usos de los hook mas usados en react para
              una mejor renderización de la web.
            </p>
            <h2 className="ff-title fs-700">Firebase</h2>
            <p>
              Iniciación de la app, colección, getFirestore, getDocs.
              Autentificar, onAuthStateChanged, signInWithEmailAndPassword
              etc...
            </p>
            <h2 className="ff-title fs-700">Netlify</h2>
            <p>
              Envío de formulario, redirección por el pushstate en react, GitHub
              desplegado
            </p>
            <h2 className="ff-title fs-700">Extras</h2>
            <p>ReactMarkdaow, vite-plugin-svgr</p>
            <h2 className="ff-title fs-700">Git</h2>
            <p>Commint, branch, merge, restauración y push</p>
          </div>
          <img src="/assets/images/caty-about.jpg" alt="Foto de una mujer" />
        </article>

        <Footer />
      </div>
    </div>
  );
}
