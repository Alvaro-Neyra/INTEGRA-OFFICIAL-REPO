import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import NotFound from './views/NotFound';

function App() {

  const browserRouter = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/*', element: <NotFound /> }
  ]);

  return (
    <RouterProvider router={browserRouter}>
    </RouterProvider>
  );
}

export default App;
