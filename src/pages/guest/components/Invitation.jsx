import React, { useState } from "react";
import Ticket from "./Ticket";
import BackgroundMusic from "./BackgroundMusic";

function Invitation({ className, guest }) {
  const [showTickets, setShowTickets] = useState(false);

  return (
    <section className={className}>
      <BackgroundMusic></BackgroundMusic>
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
        </span>
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
      </div>
      {showTickets && (
        <div className="content-tickets">
          <Ticket numGuest={guest.numGuest}></Ticket>
        </div>
      )}
    </section>
  );
}

export default Invitation;
