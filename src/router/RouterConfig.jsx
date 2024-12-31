
import { createBrowserRouter, redirect } from "react-router-dom";
import Guest from "../pages/guest/Guest";

// Configuración de las rutas
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    loader: () => redirect("/guest")
  },
  {
    path: "/guest/:clave", 
    element: <Guest /> 
  }
]);