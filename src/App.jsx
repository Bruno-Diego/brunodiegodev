import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Works, Contact, Footer, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
        </div>
        <Footer/>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
} 
export default App

