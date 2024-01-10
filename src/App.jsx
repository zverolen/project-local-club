import Members from './components/members/Members'
import Description from './components/description/Description'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import Signup from './components/signup/Signup'
import { useState } from 'react'

function App() {

  const [ isFormActivated, setIsFormActivated ] = useState(false);

  function handleDemo() {
    setIsFormActivated(true);
  }

  return (
    <>
      <div className='gradient'>
        <Header />
        <main>
          <Members />
          <Description />
          <Signup handleDemo={ handleDemo } isClicked={ isFormActivated } />
          <Gallery />
        </main>
      </div>
      <Footer isLinkHidden={ isFormActivated } />
    </>
  )
}

export default App
