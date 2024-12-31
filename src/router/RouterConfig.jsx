
import { createBrowserRouter, redirect } from "react-router-dom";
import Guest from "../pages/guest/Guest";

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
    path: "*",  // Ruta "catch-all" para rutas no definidas
    element: <Guest />,
    loader: () => redirect("/"),  // Redirige a la página principal en caso de ruta desconocida
  }
]);