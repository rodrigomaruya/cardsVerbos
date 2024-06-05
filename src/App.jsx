import Cards from "./Cards/cards";
import InfoConjugarVerbo from "./modal/infoConjugarVerbo";
import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";


function App() {

  const [isOpen,setIsOpen]=useState(false)
  console.log(isOpen)

  return (
    <div className="w-full min-h-screen ">
      <header className="w-full h-full bg-cyan-950 flex justify-center items-center">
        <h1 className="p-3 text-white font-bold">Aprendendo Japonês</h1>
        <nav>
          <CiCircleInfo size={20} color="white" onClick={()=>setIsOpen(!isOpen)}/>
        </nav>
        
      </header>
      <div className="flex justify-center mt-2">
        <Cards/>
        {isOpen && (
          <InfoConjugarVerbo/>
        )}
      </div>
     
    </div>
  )
}

export default App
