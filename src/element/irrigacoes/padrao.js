import React from "react";
import "./padrao.css"

function Padrao(){
    return(
        <body>
            <div className= "informacao2">
                <p>
                    Escolhe dentre as 3 opções fornecidas qual você
                    deseja ligar/desligar a irrigação automática.
                </p>
            </div>

            <img className="pimenta" src="https://trimais.vteximg.com.br/arquivos/ids/1028433-1000-1000/foto_original.jpg?v=637707589562330000" alt="pimenta"/>

            <div className= "cultura1">
                <div className= "caixa1">
                    <p className= "texto"></p>
                </div>
            </div>

            <input className="botaoC1" type= "submit" value= "Selecionar"/>

            <div className= "cultura2">
                <div className= "caixa2">
                    <p className= "texto"></p>
                </div>
            </div>

            <input className="botaoC2" type= "submit" value= "Selecionar"/>

            <div className= "cultura3">
                <div className= "caixa3">
                    <p className= "texto"></p>
                </div>
            </div>

            <input className="botaoC3" type= "submit" value= "Selecionar"/>
        </body>
    );
}

export default Padrao;
