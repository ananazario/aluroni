import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className='body'>
      <Navbar />
        <main className="main">
          <Outlet />
        </main>
    </div>
    <Footer />
    </>
  )
}

export default App
