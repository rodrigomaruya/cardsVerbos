
function InfoConjugarVerbo(){

	return(
		<div className="w-full max-w-5xl  flex justify-center absolute bg-black/10  border">
			<div className="md:max-w-2xl w-80   border flex flex-col items-center bg-white ">
				<h1 className="font-bold mb-3">Grupos de Verbos</h1>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 1 (Godan-doushi)</h2>
					<ul>
						<li>Terminam em (う, く, す, つ, む, ぶ, る, ぐ).</li>
						<li>話す (hanasu) - falar</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 2 (Ichidan-doushi)</h2>
					<ul>
						<li>Terminam em -iru ou -eru.</li>
						<li>食べる (taberu) - comer</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="text-sm font-bold p-1">Grupo 3 (Verbos Irregulares)</h2>
					<ul>
						<li>する (suru) - fazer</li>
						<li>来る (kuru) - vir</li>
					</ul>
				</div>

				<h2 className="font-bold mb-1 p-2">Formas de Conjugação</h2>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm">Forma Dicionário (Presente Informal)</h2>
					<ul>
						<li>Grupo 1: 話す (hanasu)</li>
						<li>Grupo 2: 食べる (taberu)</li>
						<li>Irregulares: する (suru), 来る (kuru)</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm">Forma -ます (Formal)</h2>
					<ul>
						<li>Grupo 1: 話します (hanashimasu)</li>
						<li>Grupo 2: 食べます (tabemasu)</li>
						<li>Irregulares: します (shimasu), 来ます (kimasu)</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm" >Forma て (Forma Te)</h2>
					<ul>
						<h2 className="text-center">Grupo 1</h2>
						<li>Terminados em う、つ、る trocamos por って</li>
						<li>Terminados em ぶ、む、ぬ trocamos por んで</li>
						<li>Terminados em く trocamos por いて</li>
						<li>Terminados em ぐ trocamos por いで</li>
						<li>Terminados em し trocamos por して</li>
					</ul>
					<ul>
						<li>Grupo 2: 食べて (tabete)</li>
						<li>Irregulares: して (shite), 来て (kite)</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-1 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm">Forma た (Passado Informal)</h2>
					<ul>
						<h2 className="text-center">Grupo 1</h2>
						<li>Terminados em う、つ、る trocamos por った</li>
						<li>Terminados em ぶ、む、ぬ trocamos por んだ</li>
						<li>Terminados em く trocamos por いた</li>
						<li>Terminados em ぐ trocamos por いだ</li>
						<li>Terminados em し trocamos por した</li>
						<li>Exceção いく fica いった</li>

					</ul>
					<ul>
						<li>Grupo 2: 食べた (tabeta)</li>
						<li>Irregulares: した (shita), 来た (kita)</li>
					</ul>
				</div>

				<div className="flex flex-col items-center text-xs mb-3 p-1">
					<h2 className="font-bold mb-1 p-2 text-sm">Forma Negativa (Presente Informal)</h2>
					<ul>
						<li>Grupo 1: 話さない (hanasanai)</li>
						<li>Grupo 2: 食べない (tabenai)</li>
						<li>Irregulares: しない (shinai), 来ない (konai)</li>
					</ul>
				</div>

			

			</div>

		</div>
	)
}

export default InfoConjugarVerbo