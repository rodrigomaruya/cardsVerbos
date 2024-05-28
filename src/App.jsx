import Cards from "./Cards/cards"

function App() {

  return (
    <div className="w-full min-h-screen ">
      <header className="w-full h-full bg-cyan-950 flex justify-center items-center">
        <h1 className="p-3 text-white font-bold">Aprendendo Japonês</h1>
      </header>
      <div className="flex justify-center mt-12">
        <Cards/>

      </div>
    </div>
  )
}

export default App
