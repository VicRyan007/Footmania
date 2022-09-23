import React from "react";
import '../css/header.css';


export default function Header() {
    return (

        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet" />

            <div className="main">
                <img  src="src\assets\—Pngtree—football player_1795041.png" width={200} height={200} alt="" />
                <div className="div" >
                    <h1 style={{ fontFamily: "'Bungee Spice'" }}>FootMania</h1>
                    <p>Dev´s {"</>"} :</p>
                    <p>José Alfredo</p>
                    <p>Mº Gabriela</p>
                    <p>Gabriel Silva</p>
                    <p>Ryan Víctor</p>
                </div>
                <img  src="src\assets\—Pngtree—soccer player_4493291.png" width={200} height={200} alt="" />
            </div>

        </>
    )
}