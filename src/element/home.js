import './home.css';
import React from 'react';

const Home = () =>{
    return(
        <body>
            <main>
                <div className= "quadrado">
                <p className= "projeto">O Projeto</p>
                </div>

                <div className= "quadrado2">
                <p className= "projeto2">Aumentar a eficiência de plantações de pequeno porte e diminuir o uso desnecessário de água através do protótipo de um sistema de irrigação automatizado.</p>
                </div>

                <div className= "seta"></div>

                <div className= "quadrado3">
                <p className= "projeto3"> Promovendo diversas vantagens</p>
                </div>

                <div className= "imagem">
                <img src="https://cdn-icons-png.flaticon.com/512/1188/1188048.png?w=360" alt="irrigacao"></img>
                </div>

            </main>
        </body>
    );
}

export default Home;