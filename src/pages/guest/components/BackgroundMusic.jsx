import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Estilos en línea para el reproductor
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#f0f0f0",
      padding: "5px",
      fontFamily: "Arial, sans-serif",
      gap: "25px",
      borderRadius: "30px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    icon: {
      fontSize: "30px",
      color: "darkgoldenrod",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    iconHover: {
      color: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} loop>
        <source src="/Song.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    <p>Mi bello ángel.mp3</p>
      <FontAwesomeIcon
        icon={isPlaying ? faPause : faPlay}
        style={styles.icon}
        onClick={togglePlay}
        title={isPlaying ? "Pausar" : "Reproducir"}
      />

      <FontAwesomeIcon
        icon={isMuted ? faVolumeMute : faVolumeUp}
        style={styles.icon}
        onClick={toggleMute}
        title={isMuted ? "Quitar Mute" : "Silenciar"}
      />
    </div>
  );
}

export default BackgroundMusic;