import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Vebsaytlar yaratuvchi",
          "Telegram Botlar yaratuvchi",
          "Grafik Dizayner " , 
          
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
