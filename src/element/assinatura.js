import React from "react";
import "./assinatura.css"
import { Link } from 'react-router-dom';

function Assinatura() {
    return (
        <div className="container-fluid">

            <div className="row align-items-center">
                <div className="col-md-3 col-sm-12 mt-5 text-md-right text-center">
                
                </div>
                <div className="col-md-6 col-sm-12 mt-5 borda bg-card-titulo">
                    <p className="texto-informacao pt-4">
                        Escolha uma opção abaixo para sua irrigação e,
                        após isso, será redirecionado automaticamente para manusear!
                    </p>
                </div>
            </div>

            <div className="row py-3 justify-content-center">
                <div className="col-md-2 col-sm-12 ">
                    <div className="padrao caixa-lista">

                        <div className="h2CaixaP">
                            <h2>Padrão</h2>
                        </div>

                        <ul className="p-2">
                            <li>Simples e prático</li>
                            <li>Configurações de 3 culturas pré-definidas</li>
                            <li>Processo automatizado</li>
                            <li>É necessário apertar apenas 1 botão para começar a irrigação</li>
                            <li>Gratuito!</li>
                        </ul>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1"><Link to="/padrao" className="text-white text-decoration-none">Selecionar</Link></button>
                    </div>

                </div>

                <div className="col-md-2 col-sm-12 ">
                    <div className="padrao caixa-lista">

                        <div className="h2CaixaC">
                            <h2>Customização</h2>
                        </div>
                        
                        <ul className="p-2">
                            <li>Formato de perfil para salvar configurações escolhidas pelo usuário</li>
                            <li>Sinta-se livre em escolher a cultura que deseja irrigar</li>
                            <li>Permitido fazer mais de 1 perfil</li>
                            <li>Atenção: por sua conta e risco!</li>
                            <li>Gratuito!</li>
                        </ul>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1"><Link to="/custom" className="text-decoration-none text-white">Selecionar</Link></button>
                    </div>
                </div>
                <div className="col-md-2 col-sm-12">
                    <div className="padrao caixa-lista">

                        <div className="h2CaixaM">
                            <h2>Manual</h2>
                        </div>

                        <ul className="p-2">
                            <li>Controle de forma manual</li>
                            <li>Exibe histórico mostrando a data/horário em que o usuário irrigou</li>
                            <li>É necessário apertar apenas 1 botão para irrigar e para desligar</li>
                            <li>Atenção: por sua conta e risco!</li>
                            <li>Gratuito!</li>
                        </ul>
                    </div>

                    <div className="row justify-content-center ">
                        <button className="btn-success btn1"><Link to="/manual" className="text-decoration-none text-white">Selecionar</Link></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Assinatura;