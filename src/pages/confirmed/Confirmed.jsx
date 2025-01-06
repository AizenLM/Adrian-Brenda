import React, { useEffect, useState } from "react";

const Confirmed = () => {
  const [confirmedGuests, setConfirmedGuests] = useState([]);
  const [notConfirmedGuests, setNotConfirmedGuests] = useState([]);
  const [totalGuests, setTotalGuests] = useState(0);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("https://adrian-brenda-back.onrender.com/guests");
        const data = await response.json();

        const confirmed = data.guests.filter((guest) => guest.rsvp);
        const notConfirmed = data.guests.filter((guest) => !guest.rsvp);

        setConfirmedGuests(confirmed);
        setNotConfirmedGuests(notConfirmed);
        setTotalGuests(data.guests.length);
      } catch (error) {
        console.error("Error al obtener la lista de invitados:", error);
      }
    };

    fetchGuests();
  }, []);

  const copyMessage = (guest) => {
    const message = `Hola, buenas tardes.\n\nCon mucho cariño, le envío la invitación a nuestra boda: https://adrianbrenda.netlify.app/guest/${guest.clave}.\n\nEsperamos con ilusión su confirmación para compartir este día tan especial con usted.`;
    navigator.clipboard
      .writeText(message)
      .then(() => alert("Mensaje copiado al portapapeles."))
      .catch((err) => console.error("Error al copiar el mensaje:", err));
  };

  const renderGuestTable = (guests, title) => (
    <div>
      <h2>{title}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Asistencia Confirmada</th>
            <th>Número de Invitados</th>
            <th>Fecha de Confirmación</th>
            <th>Invitación</th>
            <th>Copiar Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.clave}>
              <td>{guest.lastName}</td>
              <td>{guest.rsvp ? "Sí" : "No"}</td>
              <td>{guest.numGuest}</td>
              <td>
                {guest.fechaRSVP
                  ? new Date(guest.fechaRSVP).toLocaleDateString()
                  : "Pendiente"}
              </td>
              <td>
                <a
                  href={`https://adrianbrenda.netlify.app/guest/${guest.clave}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Invitación
                </a>
              </td>
              <td>
                <button onClick={() => copyMessage(guest)}>Copiar Mensaje</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h1>Lista de Invitados</h1>
      <div style={{ marginBottom: "20px" }}>
        <p><strong>Total de Invitados:</strong> {totalGuests}</p>
        <p><strong>Confirmados:</strong> {confirmedGuests.length}</p>
        <p><strong>No Confirmados:</strong> {notConfirmedGuests.length}</p>
      </div>
      {renderGuestTable(confirmedGuests, "Invitados Confirmados")}
      {renderGuestTable(notConfirmedGuests, "Invitados No Confirmados")}
    </div>
  );
};

export default Confirmed;
