import { MainNav, Header, Features, PetProducts, About, Contact } from './components/index.js'


function App() {

  return (
    <div className="App">
      <MainNav />
      <Header />
      <Features />
      <PetProducts />
      {/* <About /> */}
      <Contact />
    </div>
  )
}

export default App
