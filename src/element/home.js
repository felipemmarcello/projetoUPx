import './home.css';
import React from 'react';

function Home() {
    return (

        <div className='container'>
            <div className='row pb-5'>
                <div className='col-12 pt-5 h-30'>
                    <div className=''>

                        <div className='row align-items-center borda'>
                            <div className='col-md-6 col-sm-12 h-25 text-center height-projeto bg-quadrado-projeto'>
                                <h1 className='ajustar-texto-projeto'>O Projeto</h1>
                            </div>

                            <div className='col-md-6 col-sm-12 height-projeto'>
                                <h2 className='textoQua ajustar-texto-explicativo mr-md-3 mt-md-5'>
                                    Aumentar a eficiência de plantações de pequeno porte e diminuir o uso desnecessário de água através do protótipo de um sistema de irrigação automatizado.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row pb-2'>
                <div className='col-12'>
                    <div class="card-group ajustar-fonte">
                        <div className="card bg-body borda">

                            <h3 className="card-title font-weight-bold">Promove diversas vantagens:</h3>

                            <div className='my-auto mx-auto text-justify'>
                                <p className='display-18'>Redução de mão de obra;</p>
                                <p className='display-18'>Irrigação de forma mais precisa;</p>
                                <p className='display-18'>Facilidade de irrigação através do site ou aplicativo;</p>
                                <p className='display-18'>Evitar desperdício de recursos gastos de formas desnecessárias.</p>
                            </div>
                        </div>

                        <div className="card bg-body ml-md-2 border-0">
                            <div className="card-body text-center p-0">
                                <img className="img-fluid w-50" src="https://cdn-icons-png.flaticon.com/512/1188/1188048.png?w=360" alt="irrigacao"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;