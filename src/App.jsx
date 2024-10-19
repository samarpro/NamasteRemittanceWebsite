import { useState } from 'react'
import { Navbar, Hero, Why, AddServices, Review, FAQ, FAQ2 ,Footer } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="Namaste-Remittance m-auto flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Why />
      <AddServices />
      <Review />
      <FAQ />
      <FAQ2 />
      <Footer />
    </>
  )
}

export default App;
