import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contato from './routes/contato/Contato'
import Sobre from './routes/sobre/Sobre'
import "./main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/contato",
    element: <Contato/>,
  },
  {
    path: "/sobre",
    element: <Sobre/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);