import React from "react";
import "./manual.css";

function Manual(){
    return(
        <body>
            <div className= "botaoIrrigar">
                <p>IRRIGAR</p>
            </div>

            <div className= "alert">
                <p><b>CUIDADO</b>: cuidado com a quantidade de água liberada.</p>
            </div>

            <div className= "historico">
                <p>*Receber dados da API*</p>
            </div>
        </body>
    )
}

export default Manual;
