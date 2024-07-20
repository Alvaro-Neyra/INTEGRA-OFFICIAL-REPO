import Home from './views/Home'
import Nosotros from './views/Nosotros'
import NotFound from './views/NotFound'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/us", element: <Nosotros /> },
    { path: "/*", element: <NotFound/>}
  ]);
  
  return (
    <RouterProvider router={browserRouter}/>
  );
}

export default App
