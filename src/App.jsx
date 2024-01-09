import Members from './components/members/Members'
import Description from './components/description/Description'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import Signup from './components/signup/Signup'

function App() {

  return (
    <>
    <div className='gradient'>
      <Header />
      <main>
        <Members />
        <Description />
        <Signup />
        <Gallery />
      </main>
    </div>
    <Footer />
    </>
  )
}

export default App
