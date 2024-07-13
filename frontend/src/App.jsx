import './App.css'
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { About, Contect, Footer, Header, HeroSection, Services } from './pages';

function App() {

  return (
    <>
      <Header />
      <HeroSection/>
      <Services/>
      <About/>
      <Contect/>
      <Footer />
      <Toaster />
    </>
  )
}

export default App;
