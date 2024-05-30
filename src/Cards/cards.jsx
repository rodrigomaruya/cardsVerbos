import { useState,useEffect } from "react"
import api from "../api/api"
import './style.css'

function Cards(){

	const [girada,setGirada]=useState(false);
	const [novoGet,setNovoGet]=useState(true);
	const [virar,setVirar]=useState(false);
	const [getVerbo,setGetVerbo]=useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [selectedOption, setSelectedOption] = useState('/');
	


	useEffect(()=>{
		const get=async()=>{
			try{
				const response= await api.get(`${selectedOption}`)
				setGetVerbo(response.data)
				setNovoGet(true)

			}catch(erro){
				console.log('erro no get')
			}
		}
		get()
	},[selectedOption]);
	

	const handleDraw = () => {
		if(novoGet){
			// Sorteia um índice aleatório
			const randomIndex = Math.floor(Math.random() * getVerbo.length);
			// Seleciona o item correspondente ao índice sorteado
			setSelectedItem(getVerbo[randomIndex]);
			return
		}
		window.location.reload();
		setNovoGet(true);
	};

	const dificl = () => {
		setNovoGet(false)
		const randomIndex = Math.floor(Math.random() * getVerbo.length);
		setSelectedItem(getVerbo[randomIndex]);
		setGirada(false);
		setVirar(false)

	};
	const dificil = () => {
		setNovoGet(false)
		setGirada(true);
		setVirar(true)

	};

	const facil=(id)=>{
		setNovoGet(false)
		const deletar=getVerbo.filter(verbo=>verbo._id != id)
		setGetVerbo(deletar)
		const randomIndex = Math.floor(Math.random() * getVerbo.length);
		setSelectedItem(getVerbo[randomIndex]);
		setGirada(false)
		setVirar(false)
	};
	
	return(
		<div className="flex flex-col ">

			<div className="w-full mb-3 bg-cyan-700 p-1">
				<select className="w-full outline-none rounded-sm p-1" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
					<option value="/">Todas</option>
					<option value="/verbo/grupo1">Verbo Grupo 1 </option>
					<option value="/verbo/grupo2">Verbo Grupo 2</option>
					<option value="/verbo/grupo3">Verbo Grupo 3</option>
					<option value="/verbo/adjetivoI">Adjetivo-I</option>
					<option value="/verbo/adjetivoNA">Adjetivo-NA</option>
				</select>
			</div>

			<button className="bg-cyan-900 mt-3 p-3 rounded-md font-bold text-white mb-10 flex-1" onClick={handleDraw}>{novoGet?'Começar':'Reiniciar'}</button>
			<h2 className="text-center font-bold mb-2">Total cartas: {getVerbo.length}</h2>

			{selectedItem &&(
				<div className={`carta ${girada ? 'girada' : ''}`}  >

					<div className="carta-frente text-center bg-cyan-900">
						<h2 className="text-2xl">{selectedItem.portugues}</h2>
					</div>

					<div className="carta-verso flex flex-col bg-cyan-700">
						<h2 className="text-3xl">{selectedItem.hiragana}</h2>
						<p className="text-2xl">{selectedItem.romaji}</p>
						<p className="text-1xl">{selectedItem.grupo}</p>
					</div>

				</div>

			)}
			{
				!virar&&(
					<div className="flex gap-1">
						<button onClick={dificil} className=" bg-cyan-900 mt-3 p-3 rounded-md font-bold text-white mb-10 flex-1">Virar</button>
					</div>
					
				)
			}
			{virar &&(
				<div className="flex gap-1">
					<button onClick={()=>facil(selectedItem._id)} className=" bg-cyan-900 mt-3 p-3 rounded-md font-bold text-white mb-10 flex-1">Fácil</button>
					<button onClick={dificl} className=" bg-cyan-900 mt-3 p-3 rounded-md font-bold text-white mb-10 flex-1">Difícil</button>
				</div>

			)}

		</div>
	)
}

export default Cards