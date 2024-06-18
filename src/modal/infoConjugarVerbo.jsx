
function InfoConjugarVerbo(){

	return(
		<div className="w-full max-w-5xl  flex justify-center absolute bg-black/10  border top-20">
			<div className="flex flex-col items-center bg-white max-w-sm w-full">
				<h1 className="font-bold mb-3 text-red-500">Grupos de Verbos</h1>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 1 (Godan-doushi)</h2>
					<ul>
						<li>Terminam em (う, く, す, つ, む, ぶ, る, ぐ).</li>
						
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 2 (Ichidan-doushi)</h2>
					<ul>
						<li>Terminam em -iru ou -eru.</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 3 (Verbos Irregulares)</h2>
					<ul>
						<li>する (suru) - fazer</li>
						<li>来る (kuru) - vir</li>
					</ul>
				</div>

				<h2 className="font-bold mb-1 p-2 text-red-500">Formas de Conjugação(informal)</h2>

				<div className="flex flex-col justify-center w-full text-xs mb-1 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm text-blue-500 text-center" >Forma て (Forma Te)</h2>
					
						<h2 className="text-center font-bold my-1">Grupo 1</h2>
						<p className="p-1">Terminados em う、つ、る trocamos por って</p>
						<p className="p-1">Terminados em ぶ、む、ぬ trocamos por んで</p>
						<p className="p-1">Terminados em く trocamos por いて</p>
						<p className="p-1">Terminados em ぐ trocamos por いで</p>
						<p className="p-1">Terminados em す trocamos por して</p>
					
					<h2 className="text-center font-bold my-1">Grupo 2</h2>
					
						<p className="p-1">Trocamos る por て</p>
					
					<h2 className="text-center font-bold my-1">Grupo 3 (Verbos Irregulares)</h2>
				
						<p className="p-1">Irregulares: して (shite), 来て (kite)</p>
					
				</div>

				<div className="flex flex-col justify-center text-xs mb-1 p-1 w-full">

					<h2 className="font-bold mb-1 p-2 text-sm text-blue-500 text-center">Forma た (Passado Informal)</h2>
					
						<h2 className="text-center font-bold my-1">Grupo 1</h2>
						<p className="p-1">Terminados em う、つ、る trocamos por った</p>
						<p className="p-1">Terminados em ぶ、む、ぬ trocamos por んだ</p>
						<p className="p-1">Terminados em く trocamos por いた</p>
						<p className="p-1">Terminados em ぐ trocamos por いだ</p>
						<p className="p-1">Terminados em す trocamos por した</p>
						<p className="p-1">Exceção いく fica いった</p>
				
					<h2 className="text-center font-bold my-1">Grupo 2</h2>
					
						<p className="p-1">Trocamos る  por た</p>
					
					<h2 className="text-center font-bold my-1">Grupo 3 (Verbos Irregulares)</h2>
					
						<p className="p-1">Irregulares: した (shita), 来た (kita)</p>
					
				</div>

				<div className="flex flex-col justify-center text-xs mb-3 p-1 w-full">

					<h2 className="font-bold mb-1 p-2 text-sm text-blue-500 text-center">Forma Presente/Negativo</h2>
					
					<h2 className="text-center font-bold my-1">Grupo 1</h2>
					<p className="p-1">Trocamos o U por A e adicionamos o ない</p>
					<p className="p-1">Quando a ultima letra for う trocamos por わ e finalizamos <br/>com ない</p>
					<p className="p-1">A unica exceção é o negativo do verbo ある que é ない</p>
					
					<h2 className="text-center font-bold my-1">Grupo 2</h2>
					
					<p className="p-1">Trocamos る  por ない</p>
					
					<h2 className="text-center font-bold my-1">Grupo 3 (Verbos Irregulares)</h2>
					
					<p className="p-1">Irregulares: しない, こない</p>
				
				</div>

			

			</div>

		</div>
	)
}

export default InfoConjugarVerbo