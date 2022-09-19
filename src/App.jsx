import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function App() {



  const [jogadores, setJogadores] = useState([]);
  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
    .then(res => res.json())
    .then(res => {
      setJogadores(res.data)
    });
  }, []);

  console.log(jogadores)

  return (
    <div className="App">
      {jogadores.map(x=>(<li key={x.id}><h1>{x.first_name}</h1>
        <h1>{x.team.name}</h1>
      </li>))}
    </div>
  );
}