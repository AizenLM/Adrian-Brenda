import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Invitation from "./components/Invitation";
import Misa from "./components/Misa";
import Location from "./components/Location";
import CountdownTimer from "./components/CountdownTimer";
import History from "./components/History";
import "animate.css"; // Importa animate.css
import { useInView } from "react-intersection-observer"; // Importa el hook para detectar visibilidad
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";

export default function Guest() {
  const { clave } = useParams(); // Obtenemos la clave desde la URL
  const [guest, setGuest] = useState(null);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch para obtener la información del invitado por su clave
    const fetchGuest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/guest/${clave}`
        );
        setGuest(response.data.guest);
        setLoading(false);
        console.log(clave);
      } catch (error) {
        console.error("Error fetching guest data:", error);
      }
    };

    fetchGuest();
  }, [clave]);
  // Componente Invitation
  const { ref: invitationRef, inView: invitationInView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.5, // El 50% del componente debe estar en la vista
  });

  // Componente Misa
  const { ref: misaRef, inView: misaInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Componente Location
  const { ref: locationRef, inView: locationInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Componente History
  const { ref: historyRef, inView: historyInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Componente CountdownTimer
  const { ref: countdownRef, inView: countdownInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Función para generar la clase de animación según la visibilidad
  const animationClass = (inView) => (inView ? "animate__fadeInUp" : "");

  return (
    <>
      <Header />
      {loading ? (
        <div className="content"><h2 className="bad-url">NO TE ENCUENTRAS EN LA LISTA DE INVITADOS 😪</h2></div>
       
      ) : (
        <div className="content">
        <div className="scrollElement" ref={invitationRef}>
          <Invitation
            guest={guest}
            className={`animate__animated ${animationClass(
              invitationInView
            )}`}
          />
        </div>

        <div className="scrollElement" ref={misaRef}>
          <Misa />
        </div>

        <div className="scrollElement" ref={locationRef}>
          <Location />
        </div>

        <div className="scrollElement" ref={historyRef}>
          <History />
        </div>

        <div className="scrollElement" ref={countdownRef}>
          <CountdownTimer
            className={`animate__animated ${animationClass(countdownInView)}`}
          />
        </div>
      </div>
      )}
      <Footer></Footer>
    </>
  );
}
