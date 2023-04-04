import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
} 
export default App

