import React from "react";
import "./padrao.css";
import axios from 'axios';

function PostPimenta() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/pimenta")
    .then(()=> {
        window.alert("Selecionado a Pimenta")
    })
    .catch(() =>{
        window.alert("Erro")
    })
}

function PostBanana() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/banana")
    .then(()=> {
        window.alert("Selecionado a Banana")
    })
    .catch(() =>{
        window.alert("Erro")
    })
}

function PostAlface() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/alface")
    .then(()=> {
        window.alert("Selecionado o Alface")
    })
    .catch(() =>{
        window.alert("Erro")
    })
}



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

                    <button className="botaoCaixa1"  onClick={PostPimenta} value= "Selecionar">Selecionar</button>
                </div>
            </div>
            <img className="banana" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png" alt="banana"/>
            <div className= "cultura2">
                <div className= "caixa2">
                    <h2>Banana</h2>
                    <br></br>

                    <p className= "texto">Irrigar quando a umidade do solo estiver: X</p>
                    <p className= "texto">Liberar: X ml de água</p>
                    <p className= "texto">Tempo médio para crescer o necessário: X</p>
                    <p className= "texto">Ficar ao sol/Não ficar ao sol</p>

                    <button className="botaoCaixa2" onClick={PostBanana} value= "Selecionar">Selecionar</button>
                </div>
            </div>
            <img className="alface" src="https://cdn.awsli.com.br/1000x1000/334/334766/produto/18043861/e57164bfb6.jpg" alt="alface"/>
            <div className= "cultura3">
                <div className= "caixa3">
                    <h2>Alface</h2>

                    <br></br>

                    <p className= "texto">Irrigar quando a umidade do solo estiver: X</p>
                    <p className= "texto">Liberar: X ml de água</p>
                    <p className= "texto">Tempo médio para crescer o necessário: X</p>
                    <p className= "texto">Ficar ao sol/Não ficar ao sol</p>

                    <button className="botaoCaixa3" onClick={PostAlface} value= "Selecionar">Selecionar</button>
                </div>
            </div>
        </body>
    );
}

export default Padrao;
