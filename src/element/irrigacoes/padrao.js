import React from "react";
import "./padrao.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import pimenta from "../fotos/pimenta.png"
import alface from "../fotos/alface.png"
import banana from "../fotos/banana.png"

function PostPimenta() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/pimenta")
        .then(() => {
            toast.success("Pimenta selecionado!");
        })
        .catch(() => {
            window.alert("Erro")
        })
}

function PostBanana() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/banana")
        .then(() => {
            toast.success("Banana selecionado!");
        })
        .catch(() => {
            window.alert("Erro")
        })
}

function PostAlface() {
    axios.post("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/alface")
        .then(() => {
            toast.success("Alface selecionado!");
        })
        .catch(() => {
            window.alert("Erro")
        })
}



function Padrao() {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-7 col-sm-12 mt-5 borda bg-card-titulo">

                    <p className="texto-informacao pt-4">
                        Escolha dentre as 3 opções fornecidas qual você
                        deseja ativar a irrigação automática.
                    </p>

                </div>
            </div>

            <div className="row py-3 justify-content-center">
                <div className="col-md-2 col-sm-12 text-center mt-4">
                    <img className="img-tamanho" src={alface} alt="alface" />

                    <div className="cultura caixa-lista">
                        <div className="h2Cultura">
                            <h2>Alface</h2>
                        </div>
                        
                        <p className="texto">Irrigar quando a umidade do solo estiver: X</p>
                        <p className="texto">Liberar: X ml de água</p>
                        <p className="texto">Tempo médio para crescer o necessário: X</p>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1" onClick={PostAlface} value="Ativar">Ativar</button>
                    </div>
                </div>

                <div className="col-md-2 col-sm-12 text-center mt-4">
                    <img className="img-tamanho" src={banana} alt="banana" />

                    <div className="cultura caixa-lista">
                        <div className="h2Cultura">
                            <h2>Banana</h2>
                        </div>

                        <p className="texto">Irrigar quando a umidade do solo estiver: X</p>
                        <p className="texto">Liberar: X ml de água</p>
                        <p className="texto">Tempo médio para crescer o necessário: X</p>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1" onClick={PostBanana} value="Ativar">Ativar</button>
                    </div>

                </div>

                <div className="col-md-2 col-sm-12 text-center mt-4">
                    <img className="img-tamanho" src={pimenta} alt="pimenta" />

                    <div className="cultura caixa-lista">
                        <div className="h2Cultura">
                            <h2>Pimenta</h2>
                        </div>

                        <p className="texto">Irrigar quando a umidade do solo estiver: X</p>
                        <p className="texto">Liberar: X ml de água</p>
                        <p className="texto">Tempo médio para crescer o necessário: X</p>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1" onClick={PostPimenta} value="Ativar">Ativar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Padrao;
