import { useState, useEffect } from "react";
import api from "../api/api";
import "./style.css";
import Loading from "../modal/loading/loading";

function Cards() {
  const [girada, setGirada] = useState(false);
  const [novoGet, setNovoGet] = useState(true);
  const [loading, setLoading] = useState(true);
  const [virar, setVirar] = useState(false);
  const [questionIsSelected, setQuestionIsSelected] = useState(true);
  const [getVerbo, setGetVerbo] = useState([]);
  const [getVerboReiniciar, setGetVerboReiniciar] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    portugues: "Clique no botão começar!",
  });
  const [selectedOption, setSelectedOption] = useState("/");

  const acabou = [
    {
      portugues: "Parabéns você decorou todas as cartas!!",
    },
  ];
  const comecar = [
    {
      portugues: "Clique no botão começar!",
    },
  ];

  useEffect(() => {
    const get = async () => {
      try {
        const response = await api.get(`${selectedOption}`);
        setGetVerbo(response.data);
        setGetVerboReiniciar(response.data);
        setNovoGet(true);
        setVirar(false);
        setGirada(false);
        setLoading(false);
      } catch (erro) {
        console.log("erro no get");
      }
    };
    get();
  }, [selectedOption]);

  const handleDraw = () => {
    if (novoGet) {
      // Sorteia um índice aleatório
      const randomIndex = Math.floor(Math.random() * getVerbo.length);
      // Seleciona o item correspondente ao índice sorteado
      setSelectedItem(getVerbo[randomIndex]);
      setQuestionIsSelected(false);
      setGirada(false);
      return;
    }

    setGetVerbo(getVerboReiniciar);
    setSelectedItem(comecar[0]);
    setGirada(false);
    setVirar(false);
    setQuestionIsSelected(true);
    setNovoGet(true);
  };

  const dificil = () => {
    setNovoGet(false);
    const randomIndex = Math.floor(Math.random() * getVerbo.length);
    setSelectedItem(getVerbo[randomIndex]);
    setGirada(false);
    setVirar(false);
  };

  const virarCarta = () => {
    setNovoGet(false);
    setGirada(true);
    setVirar(true);
  };

  const facil = async (id) => {
    const deletar = getVerbo.filter((verbo) => verbo._id != id);
    const randomIndex = Math.floor(Math.random() * deletar.length);

    setGetVerbo(deletar);
    setSelectedItem(deletar[randomIndex]);
    setNovoGet(false);
    setGirada(false);
    setVirar(false);
    setGetVerbo(deletar);

    if (getVerbo.length == 1) {
      const deletar = getVerbo.filter((verbo) => verbo._id != id);
      setGetVerbo(deletar);
      setSelectedItem(acabou[0]);
      setGirada(false);
      setVirar(false);
      setQuestionIsSelected(true);
      return;
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full mb-3 bg-cyan-700 p-1">
        <select
          className="w-full outline-none rounded-sm p-1"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="/">Todas</option>
          <option value="/verbo/grupo1">Verbo Grupo 1 </option>
          <option value="/verbo/grupo2">Verbo Grupo 2</option>
          <option value="/verbo/grupo3">Verbo Grupo 3</option>
          <option value="/verbo/adjetivoI">Adjetivo-I</option>
          <option value="/verbo/adjetivoNA">Adjetivo-NA</option>
        </select>
      </div>

      <button
        className="bg-cyan-900 p-3 rounded-md font-bold text-white mb-3 flex-1"
        onClick={handleDraw}
      >
        {novoGet ? "Começar" : "Reiniciar"}
      </button>
      <h2 className="text-center font-bold mb-2">
        Total cartas: {getVerbo.length}
      </h2>

      <div className={`carta ${girada ? "girada" : ""}`}>
        <div className="carta-frente text-center bg-cyan-900">
          <h2 className="text-2xl">{selectedItem.portugues}</h2>
        </div>

        <div className="carta-verso flex flex-col bg-cyan-700">
          <h2 className="text-3xl">{selectedItem.hiragana}</h2>
          <p className="text-2xl">{selectedItem.romaji}</p>
          <p className="text-1xl">{selectedItem.grupo}</p>
        </div>
      </div>

      {!virar && (
        <div className="flex gap-1">
          <button
            onClick={virarCarta}
            className={`${
              questionIsSelected ? "desabilitar" : ""
            }  bg-cyan-900 mt-4 py-4 rounded-md font-bold text-white mb-5 flex-1`}
            disabled={questionIsSelected}
          >
            Virar
          </button>
        </div>
      )}
      {virar && (
        <div className="flex gap-1">
          <button
            onClick={() => facil(selectedItem._id)}
            className=" bg-cyan-900 mt-4 py-4 rounded-md font-bold text-white mb-5 flex-1"
          >
            Fácil
          </button>
          <button
            onClick={dificil}
            className=" bg-cyan-900 mt-4 py-4 rounded-md font-bold text-white mb-5 flex-1"
          >
            Difícil
          </button>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
}

export default Cards;
