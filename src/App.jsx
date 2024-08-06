import React from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Navbar from 'C:/Users/nilsb/Desktop/hours/src/Components/Navbar/Navbar.jsx'

const App = () => {

  const [playState, setPlayState] = React.useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Unser Programm' title='Was wir anbieten'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Vorschau' title='Bilder unseres Programms'/>
        <Campus/>
        <Title subTitle='Kundenbewertungen' title='Was Kunden sagen'/>
        <Testimonials/>
        <Title subTitle='Kontaktiere uns' title='Wir sind für sie da'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}
export default App