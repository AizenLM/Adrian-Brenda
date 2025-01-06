
import { createBrowserRouter, redirect } from "react-router-dom";
import Guest from "../pages/guest/Guest";
import Confirmed from "../pages/confirmed/Confirmed";

// Configuración de las rutas
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    loader: () => redirect("/guest/invitation")
  },
  {
    path: "/guest/:clave", 
    element: <Guest /> 
  },
  {
    path: "/confirmedaznlm",
    element: <Confirmed></Confirmed>
  },
  {
    path: "*",  // Ruta "catch-all" para rutas no definidas
    element: <Guest />,
    loader: () => redirect("/"),  // Redirige a la página principal en caso de ruta desconocida
  }
]);