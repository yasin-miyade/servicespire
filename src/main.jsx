import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/AboutUs/About.jsx'
import Contact from './assets/components/ContactUs/Contact.jsx'
import Services from './assets/components/Services/Services.jsx'
import Login from './assets/components/Login/Login.jsx'
import Footer from './assets/components/Footer/Footer.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='footer' element={<Footer/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
