import React, { useState } from "react";
import Ticket from "./Ticket";
import BackgroundMusic from "./BackgroundMusic";
import axios from "axios";

function Invitation({ className, guest }) {
  const [showTickets, setShowTickets] = useState(false);
  const [isRSVPConfirmed, setIsRSVPConfirmed] = useState(guest?.rsvp || false);
  const [loading, setLoading] = useState(false);

  const handleRSVP = async () => {
    if (isRSVPConfirmed) {
      alert("¡Ya has confirmado tu asistencia!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.patch(
        `https://adrian-brenda-back.onrender.com/guest/${guest.clave}/rsvp`
      );

      if (response.data.success) {
        setIsRSVPConfirmed(true);
        alert("¡Asistencia confirmada exitosamente!");
      } else {
        alert("Ocurrió un problema al confirmar tu asistencia.");
      }
    } catch (error) {
      console.error("Error al confirmar asistencia:", error);
      alert("Hubo un error al intentar confirmar tu asistencia.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={className}>
      <BackgroundMusic />
      <h3>
        INVITACIÓN PARA:{" "}
        <span className="guest">
          {guest.firstName} {guest.lastName}
        </span>{" "}
        Y SUS ACOMPAÑANTES
      </h3>
      <hr />
      <p>
        Con inmensa emoción en nuestros corazones, queremos compartir contigo y
        con tus acompañantes un día lleno de magia, amor y esperanza: La unión
        en matrimonio de Adrián Hernández & Brenda Aguilar. Es un honor para
        nosotros invitar a{" "}
        <span className="guest">
          {guest.firstName} {guest.lastName}
        </span>{" "}
        y a tus acompañantes a acompañarnos el <strong>25 enero 2025</strong> en
        este momento único, donde nuestro amor se convertirá en un lazo eterno.
      </p>

      <div className="container-btn">
        <button
          className="btn-primary"
          onClick={() => setShowTickets((prev) => !prev)}
          aria-pressed={showTickets}
        >
          {showTickets ? "Ocultar mi pase" : "Mostrar mi pase"}
        </button>
        <h3>favor de confirmar su asistencia haciendo clic en el botón.</h3>
        <button
          className="btn-secundary"
          onClick={handleRSVP}
          disabled={isRSVPConfirmed || loading}
        >
          {isRSVPConfirmed
            ? "Asistencia Confirmada"
            : loading
            ? "Confirmando..."
            : "Confirmar Asistencia"}
        </button>
      </div>

      {showTickets && (
        <div className="content-tickets">
          <Ticket numGuest={guest.numGuest} />
        </div>
      )}
    </section>
  );
}

export default Invitation;
