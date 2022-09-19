import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {

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

  console.log(jogadores)

  return (
    <div className="App =">
      {jogadores.map((j, i) => (

        <>
        <div className="row container justify-content-around">
          <div key={i} >
            <div className="card ">
              <div >
                <img src={j.thumbnail} className="img-thumbnail" height="600" width="600"  alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{j.titulo}</h5>
                    <p className="card-text">{j.competicao}</p>
                  </div>
                  <iframe src={j.video} width="600" height="600" frameborder="0"></iframe>
              </div>
            </div>
            </div>
        </div>
            
        </>

        


      ))}
    </div>
  );
}