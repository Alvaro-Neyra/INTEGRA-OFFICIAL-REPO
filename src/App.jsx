import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import ServiciosConstruccion from './views/ServiciosConstruccion';
import ServiciosGerencia from './views/ServiciosGerencia';
import ServiciosInmobiliaria from './views/ServiciosInmobiliaria';
import ServiciosExpediente from './views/ServiciosExpediente.jsx';
import ServiciosInspeccion from './views/ServiciosInspeccion';
import ServiciosSupervision from './views/ServiciosSupervision';
import NotFound from './views/NotFound';

function App() {

  const browserRouter = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/servicios/construccion', element: <ServiciosConstruccion/> },
    { path: '/servicios/gerencia-de-proyectos', element: <ServiciosGerencia/> },
    { path: '/servicios/inmobiliaria', element: <ServiciosInmobiliaria/> },
    { path: '/servicios/expediente-tecnico', element: <ServiciosExpediente/> },
    { path: '/servicios/inspeccion-tecnica', element: <ServiciosInspeccion/> },
    { path: '/servicios/supervision-de-obra', element: <ServiciosSupervision/> },
    { path: '/*', element: <NotFound /> }
  ]);

  return (
    <RouterProvider router={browserRouter}>
    </RouterProvider>
  );
}

export default App;
