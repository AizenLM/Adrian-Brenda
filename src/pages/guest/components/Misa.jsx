import React from "react";
import IconIglesia from "./icons/Iglesia.svg";

function Misa({className}) {
  const location =
    "https://www.google.com.mx/maps/place/La+Laguna,+Diana+Laura+Riojas+2591-2565,+Luis+Donaldo+Colosio,+55029+Ecatepec+de+Morelos,+M%C3%A9x./@19.6476251,-99.0673637,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f3c9c808ab93:0xf306e0cc50a12a8d!8m2!3d19.6476201!4d-99.0647888?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
  return (
    <>
      <section className={`${className} location`}>
        <h3>Ceremonia religiosa</h3>
        <div className="content-icons">
          <img className="icons-svg" src={IconIglesia} />
        </div>
        <p>
          <strong>Hora: </strong>4:30 PM
        </p>
        <p>
          <strong>Fecha: </strong>25 - enero - 2025
        </p>
        <p>
          <strong>Iglesia: </strong>Nuestra señora del Monte Carmelo
        </p>
        <p>
          <strong>Ubicación: </strong>Diana Laura Riojas 2591-2565, Luis Donaldo
          Colosio, 55029 Ecatepec de Morelos, Méx.{" "}
        </p>
        <p>
          <strong>Nuestros Padrinos: </strong> Manuel Vicente Navarrete Trejo, Margarita Nájera Pérez
        </p>
        <a className="btn-primary" href={location} target="_blank" rel="noopener noreferrer">Ir a la ubicacion</a>
      </section>
    </>
  );
}

export default Misa;
