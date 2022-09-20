import React from "react";
import '../css/header.css';


export default function Header() {
    return (

        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet" />
                <div className="div" >
                    <h1 style={{paddingTop:"50px", textAlign: 'center', fontFamily: "'Bungee Spice'", fontSize:'80px'}}>FootMania</h1>
                    <img src="assets\—Pngtree—isolated football with fire real_7424271.png" className="position-relative start-50" width={170} height={170} alt="bola" />
                </div>
            
        </>
    )
}