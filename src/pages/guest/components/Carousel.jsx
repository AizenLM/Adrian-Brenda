import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición en ms
    slidesToShow: 1, // Número de slides visibles en pantallas grandes
    slidesToScroll: 1, // Número de slides desplazados por transición
    autoplay: true, // Activa la reproducción automática
    autoplaySpeed: 5000, // Cambia la imagen automáticamente cada 4 segundos
    responsive: [
      {
        breakpoint: 1024, // Hasta 1024px
        settings: {
          slidesToShow: 1, // Muestra 2 imágenes
        },
      },
      {
        breakpoint: 600, // Hasta 600px
        settings: {
          slidesToShow: 1, // Muestra 1 imagen
        },
      },
    ],
  };

  const slides = [
    { id: 1, img: "/imgs/IMG3.jpg" },
    { id: 2, img: "/imgs/IMG7.jpg" },
    { id: 3, img: "/imgs/IMG2.jpg" },
  ];

  return (
    <div style={{ width: "70%", margin: "auto", padding: "20px 0" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "60px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
