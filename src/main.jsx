import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Login from './Login/Login.jsx'
import Footer from './Component/Footer.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import HeaderDashb from './Dashboard/HeaderDashb.jsx'
import PostForm from './Dashboard/PostForm.jsx'
import History from './Dashboard/History.jsx'
import Notifaction from './Dashboard/Notifaction.jsx'
import Profile from './Dashboard/Profile.jsx'
import Option from './Pages/Option.jsx'

import HLogin from './Helper/HLogin.jsx'
import HSignup from './Helper/HSignup.jsx'
import Signup from './Login/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='header' element={<HeaderDashb/>}/>
      <Route path='post' element={<PostForm/>}/>
      <Route path="history" element={<History/>}/>
      <Route path='notifaction' element={<Notifaction/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='option' element={<Option/>}/>
      <Route path='signup' element={<Signup/>}/>


      <Route path='hlogin' element={<HLogin/>}/>
      <Route path='hsignup' element={<HSignup/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
