import Bats from './components/bats/Bats'
import Description from './components/description/Description'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import Signup from './components/signup/Signup'

function App() {

  return (
    <>
    <Header />
    <main>
      <Bats />
      <Description />
      <Signup />
      <Gallery />
    </main>
    <Footer />
    </>
  )
}

export default App
