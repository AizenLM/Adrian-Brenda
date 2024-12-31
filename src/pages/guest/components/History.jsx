import React from 'react'
import Carousel from './Carousel'

function History({className}) {
  return (
    <>
    <section className={className}>
        <h3>NUESTRA HISTORIA</h3>
        <hr />
        <p>En este viaje del matrimonio, me he dado cuenta de que lo más valioso no es solo compartir una vida juntos, sino aprender a vivir y evolucionar de la mano, aceptándonos tal como somos, apoyándonos en nuestros sueños y respetándonos incluso cuando no estamos de acuerdo, porque el verdadero amor no se trata de ser perfectos, sino de elegir estar al lado del otro, en lo bueno y en lo malo, con la certeza de que juntos somos más fuertes que separados.</p>
        <Carousel></Carousel>
    </section>
    </>
  )
}

export default History