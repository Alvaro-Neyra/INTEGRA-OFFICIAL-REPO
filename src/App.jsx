import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Servicios from './views/Servicios';
import ServiciosConstruccion from './views/ServiciosConstruccion';
import ServiciosGerencia from './views/ServiciosGerencia';
import ServiciosInmobiliaria from './views/ServiciosInmobiliaria';
import ServiciosExpediente from './views/ServiciosExpediente.jsx';
import ServiciosInspeccion from './views/ServiciosInspeccion';
import ServiciosSupervision from './views/ServiciosSupervision';
import NotFound from './views/NotFound';
import Portfolio from './views/Portfolio';
import Contacts from './views/Contacts';

function App() {

  const hashRouter = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/servicios', element: <Servicios /> },
    { path: '/servicios/construccion', element: <ServiciosConstruccion/> },
    { path: '/servicios/gerencia-de-proyectos', element: <ServiciosGerencia/> },
    { path: '/servicios/inmobiliaria', element: <ServiciosInmobiliaria/> },
    { path: '/servicios/expediente-tecnico', element: <ServiciosExpediente/> },
    { path: '/servicios/inspeccion-tecnica', element: <ServiciosInspeccion/> },
    { path: '/servicios/supervision-de-obra', element: <ServiciosSupervision/> },
    { path: '/portfolio', element: <Portfolio/> },
    { path: '/contacto', element: <Contacts /> },
    { path: '/*', element: <NotFound /> }
  ]);

  return (
    <RouterProvider router={hashRouter}>
    </RouterProvider>
  );
}

export default App;
