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
                    <ul>
                        <li>Simples e prático</li>
                            <br></br>
                        <li>Configurações de 3 culturas pré-definidas</li>
                            <br></br>
                        <li>Processo automatizado</li>
                            <br></br>
                        <li>Escolha quando ligar ou desligar a irrigação automática pelo botão LIGAR/DESLIGAR</li>
                            <br></br>  
                        <li>R$??,?? mensal</li>
                    </ul>
                </div>
                
            </div>
            <button className= "botao1"><Link to="/padrao" style={{textDecoration: 'none'}}>Selecionar</Link></button>

            

            <div className= "customizado">
                <h2>Customização</h2>

                <div className= "caixaC">
                    <ul>
                        <li>Formato de perfil para salvar configurações escolhidas pelo usuário</li>
                            <br></br>
                        <li>Customização</li>
                            <br></br>
                        <li>Sinta-se livre em escolher a cultura que deseja irrigar</li>
                            <br></br>
                        <li>Escolha quando ligar ou desligar a irrigação automática pelo botão LIGAR/DESLIGAR</li>
                            <br></br>
                        <li>Atenção: por sua conta e risco!</li>
                            <br></br>
                        <li>Gratuito!</li>
                    </ul>
                </div>
            </div>

            <button className= "botao2"><Link to="/custom" style={{textDecoration: 'none'}}>Selecionar</Link></button>

            <div className= "manual">
                <h2>Manual</h2>

                <div className= "caixaM">
                    <ul>
                        <li>Controle de forma manual</li>
                            <br></br>
                        <li>Exibe histórico de quantas vezes e qual data/horário em que o usuário irrigou</li>
                            <br></br>
                        <li>É necessário apertar apenas 1 botão para irrigar</li>
                            <br></br>
                        <li>Atenção: por sua conta e risco!</li>
                            <br></br>
                        <li>Gratuito!</li>
                    </ul>
                </div>
            </div>

            <button className= "botao3"><Link to="/manual" style={{textDecoration: 'none'}}>Selecionar</Link></button>

        </body>
    )
}

export default Assinatura;