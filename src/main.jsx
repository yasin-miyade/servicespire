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
import Dashboard from './User/Dashboard.jsx'
import HeaderDashb from './User/HeaderDashb.jsx'
import PostForm from './User/PostForm.jsx'
import History from './User/History.jsx'
import Notifaction from './User/Notifaction.jsx'
import Profile from './User/Profile.jsx'
import Option from './Pages/Option.jsx'

import HLogin from './Login/HLogin.jsx'
import HSignup from './Login/HSignup.jsx'
import Signup from './Login/Signup.jsx'
import HDashboard from './Helper/HDashboard.jsx'


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
      <Route path='hdashboard' element={<HDashboard/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
