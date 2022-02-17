import { Navigation, Footer, Carousels, Testimonial, About, Event, Mengapa } from './components'
import './App.scss'
import { NewPassword } from './Page'
function App() {
  return (
    <>
      <Navigation />
      <Carousels />
      <div className='d-flex flex-column gap-5'>
        <Testimonial />
        <About />
        <Event />
        <Mengapa />
        <Footer />
      </div>
      {/* newPassword ini pisah aja */}
      <NewPassword />
    </>
  )
}

export default App
