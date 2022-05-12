import React from "react";
import "./padrao.css"

function Padrao(){
    return(
        <body>
            <div className= "informacao2">
                <p>
                    Escolha dentre as 3 opções fornecidas qual você
                    deseja ligar/desligar a irrigação automática.
                </p>
            </div>

            <img className="pimenta" src="https://trimais.vteximg.com.br/arquivos/ids/1028433-1000-1000/foto_original.jpg?v=637707589562330000" alt="pimenta"/>

            <div className= "cultura1">
                <div className= "caixa1">
                    <h2>Pimenta</h2>

                    <br></br>

                    <p className= "texto">Irrigar quando a umidade do solo estiver: X</p>
                    <p className= "texto">Liberar: X ml de água</p>
                    <p className= "texto">Tempo médio para crescer o necessário: X</p>
                    <p className= "texto">Ficar ao sol/Não ficar ao sol</p>

                    <input className="botaoCaixa1" type= "submit" value= "Selecionar"/>
                    <input className="botaoC1" type= "submit" value= "Ligar/Desligar"/>
                </div>
            </div>

            <div className= "cultura2">
                <div className= "caixa2">
                    <h2>Y</h2>
                    <br></br>

                    <p className= "texto">Irrigar quando a umidade do solo estiver: X</p>
                    <p className= "texto">Liberar: X ml de água</p>
                    <p className= "texto">Tempo médio para crescer o necessário: X</p>
                    <p className= "texto">Ficar ao sol/Não ficar ao sol</p>

                    <input className="botaoCaixa2" type= "submit" value= "Selecionar"/>
                    <input className="botaoC2" type= "submit" value= "Ligar/Desligar"/>
                </div>
            </div>

            <div className= "cultura3">
                <div className= "caixa3">
                    <h2>Y</h2>

                    <br></br>

                    <p className= "texto">Irrigar quando a umidade do solo estiver: X</p>
                    <p className= "texto">Liberar: X ml de água</p>
                    <p className= "texto">Tempo médio para crescer o necessário: X</p>
                    <p className= "texto">Ficar ao sol/Não ficar ao sol</p>

                    <input className="botaoCaixa3" type= "submit" value= "Selecionar"/>
                    <input className="botaoC3" type= "submit" value= "Ligar/Desligar"/>
                </div>
            </div>
        </body>
    );
}

export default Padrao;
