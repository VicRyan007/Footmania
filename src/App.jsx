import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function App() {

  const [jogadores, setJogadores] = useState([]);
  useEffect(() => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=MjY0NzdfMTY2MjY4NjEzN19hYTQ0ZTgwNTBhMzUzNmNkYjI2YTAzMTM2MTQ0ZTcwMzg1MWZiMTk3')
    .then(res => res.json())
    .then(res => {
      const resposta = res.response.map(res => { return { 'titulo': res.title.toLowerCase(), 'competicao': res.competition, 'thumbnail': res.thumbnail, 'data': res.date
      ,'video': res.videos.map(x=>x.embed) } })
      setJogadores(resposta)
    });
  }, []);

  console.log(jogadores)

  return (
    <div className="App">
      {jogadores.map(x=>(
      <div class="container text-center">
        <div class="row">
          <div class="col">
            {x.title}
          </div>
        </div>
      </div>
          ))}
    </div>
  );
}