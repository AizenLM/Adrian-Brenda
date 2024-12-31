import React from "react";
import IconRepcion from "./icons/Recepcion.svg";
import { Link } from "react-router-dom";
const location =
  "https://www.google.com.mx/maps/place/Av.+Luis+Donaldo+Colosio+Murrieta+2012,+Potrero+del+Rey,+Luis+Donaldo+Colosio,+55029+Ecatepec+de+Morelos,+M%C3%A9x./@19.6450054,-99.0625725,16.09z/data=!4m6!3m5!1s0x85d1f3cbce7f1c07:0xa047464761119ee2!8m2!3d19.6460426!4d-99.0618907!16s%2Fg%2F11c270624n?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

function Location({className}) {
  return (
    <>
      <section className={`${className} location`}>
        <h3>Recepción</h3>
        <div className="content-icons">
          <img className="icons-svg" src={IconRepcion} />
        </div>
        <p>
          <strong>Hora: </strong>7:00 PM
        </p>
        <p>
          <strong>Ubicación: </strong>Av. Luis Donaldo Colosio Murrieta 2012,
          Potrero del Rey, Luis Donaldo Colosio, 55010 Ecatepec de Morelos, Méx.{" "}
        </p>
        <a className="btn-primary" href={location} target="_blank" rel="noopener noreferrer">
          Ir a la ubicación
        </a>
      </section>
    </>
  );
}

export default Location;
