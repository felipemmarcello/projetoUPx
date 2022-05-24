import React from "react";
import "./assinatura.css"
import {Link} from 'react-router-dom';



function Assinatura(){
    return(
        <body>

            <div className= "informacao">
                <p>
                    Escolha uma opção abaixo para sua irrigação e, 
                    após isso, será redirecionado automaticamente para manusear!
                </p>
            </div>

            <div className= "padrao">
                <h2>Padrão</h2>

                <div className= "caixaP">
                    <p className= "texto">Simples e prático</p>
                    <p className= "texto">Configurações de 3 culturas pré-definidas</p>
                    <p className= "texto">Processo automatizado</p>
                    <p className= "texto">Escolha quando ligar ou desligar a irrigação automática pelo botão LIGAR/DESLIGAR</p>
                    <p className= "texto">R$??,?? mensal</p>
                </div>
                
            </div>
            <button className= "botao1 btn-success"><Link to="/padrao">Selecionar</Link></button>

            

            <div className= "customizado">
                <h2>Customização</h2>

                <div className= "caixaC">
                    <p className= "texto">Formato de perfil para salvar configurações escolhidas pelo usuário</p>
                    <p className= "texto">Customização</p>
                    <p className= "texto">Sinta-se livre em escolher a cultura que deseja irrigar</p>
                    <p className= "texto">Escolha quando ligar ou desligar a irrigação automática pelo botão LIGAR/DESLIGAR</p>
                    <p className= "texto">Atenção: por sua conta e risco!</p>
                    <p className= "texto">Gratuito!</p>
                </div>
            </div>

            <button className= "botao2 btn-success"><Link to="/custom">Selecionar</Link></button>

            <div className= "manual">
                <h2>Manual</h2>

                <div className= "caixaM">
                    <p className= "texto">Controle de forma manual</p>
                    <p className= "texto">Exibe histórico de quantas vezes e qual data/horário em que o usuário irrigou</p>
                    <p className= "texto">É necessário apertar apenas 1 botão para irrigar</p>
                    <p className= "texto">Atenção: por sua conta e risco!</p>
                    <p className= "texto">Gratuito!</p>
                </div>
            </div>

            <button className= "botao3 btn-success"><Link to="/manual">Selecionar</Link></button>

        </body>
    )
}

export default Assinatura;