import './App.css'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
