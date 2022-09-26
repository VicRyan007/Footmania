import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Filter from './Filter'


export default function App() {

  const [filtroValue, setFiltroValue] = useState('')
  const [jogadores, setJogadores] = useState([]);
  const [jogadoresFiltrados, setJogadoresFiltrados] = useState([]);

  useEffect(() => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=MjY0NzdfMTY2MjY4NjEzN19hYTQ0ZTgwNTBhMzUzNmNkYjI2YTAzMTM2MTQ0ZTcwMzg1MWZiMTk3')
      .then(res => res.json())
      .then(res => {
        const resposta = res.response.map(res => {
          return {
            'titulo': res.title, 'competicao': res.competition, 'thumbnail': res.thumbnail, 'data': res.date
            , 'video': res.matchviewUrl
          }
        })
        setJogadores(resposta)
        setJogadoresFiltrados(resposta)
      });
  }, []);


  function handleFiltroValue(value) {
    setFiltroValue(value)
    setJogadoresFiltrados(jogadores.filter( jogador => {return jogador.titulo.toLowerCase().includes(value.toLowerCase())}))
  }

  return (
    <div className="App">
      <Header/>
      <Filter  onChangeFiltroValue={handleFiltroValue} />
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {jogadoresFiltrados.map((j, i) => (
          <>
            <div key={i} >
              <div className="card" style={{background: "#FFC72C"}}>
                <div >
                  <img src={j.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{j.titulo}</h5>
                    <p className="card-text">{j.competicao}</p>
                  </div>
                  <iframe key={i} src={j.video} width="950" height="950" frameBorder="0"></iframe>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}