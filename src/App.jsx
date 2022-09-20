import React, { useState } from "react";
import { useEffect } from "react";
import Header from './Header'
import Filter from './Filter'


export default function App() {

  const [filtroValue, setFiltroValue] = useState('')

  const [jogadores, setJogadores] = useState([]);
  useEffect(() => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=MjY0NzdfMTY2MjY4NjEzN19hYTQ0ZTgwNTBhMzUzNmNkYjI2YTAzMTM2MTQ0ZTcwMzg1MWZiMTk3')
      .then(res => res.json())
      .then(res => {
        const resposta = res.response.map(res => {
          return {
            'titulo': res.title.toUpperCase(), 'competicao': res.competition, 'thumbnail': res.thumbnail, 'data': res.date
            , 'video': res.matchviewUrl
          }
        })
        setJogadores(resposta)
      });
  }, []);

  console.log(jogadores);
  return (
    <div className="App">
      <>
      {jogadores.map((e)=>(
        <h1>{e.titulo}</h1>
      ))}
      </>
    </div>
  );
}