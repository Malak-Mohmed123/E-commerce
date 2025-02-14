import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

export default function MainLayout() {
  return (
    <div>
    <Navbar/>
    <div className="container">
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}
