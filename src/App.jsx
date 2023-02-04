import { useState } from 'react'
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Nellie's Site</h1>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
