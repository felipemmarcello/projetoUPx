import './home.css';
import React from 'react';

function Home(){
    return(
        <body>
            <main>
                <div className= "quadrado">
                    <p>O Projeto</p>
                </div>

                <div className= "quadrado2">
                    <p>Aumentar a eficiência de plantações de pequeno porte e diminuir o uso desnecessário de água através do protótipo de um sistema de irrigação automatizado.</p>
                </div>

                <div className= "seta"></div>

                <div className= "quadrado3">
                    <h3>Promovendo diversas vantagens:</h3>

                    <p></p>

                    <p>Redução de mão de obra;</p>
                    <p>Irrigação de forma mais precisa;</p>
                    <p>Facilidade de irrigação através do site ou aplicativo;</p>
                    <p>Evitar desperdício de recursos gastos de formas desnecessárias.</p>

                </div>

                <div className= "imagem">
                    <img src="https://cdn-icons-png.flaticon.com/512/1188/1188048.png?w=360" alt="irrigacao"></img>
                </div>

            </main>
        </body>
    );
}

export default Home;