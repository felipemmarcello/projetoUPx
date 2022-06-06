import React from "react";
import "./manual.css";
import HistoricoIrrigacao from './historicoIrrigacao';
import BotaoOnOFF from './botaoOnOFF';

function Manual() {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-md-4 col-sm-12 text-center pt-3'>
                    <h1 className='text-success'>Irrigar</h1>

                    <p>Após ligar, lembre-se de desligar</p>

                    <div className='card p-3 bg-body border rounded border-success'>
                            <BotaoOnOFF/>
                    </div>
                </div>

                <div className="col-md-8 col-sm-12 pt-3 text-center">
                    <h1 className='text-primary'>Histórico de Irrigações</h1>

                    <HistoricoIrrigacao />
                </div>

            </div>
        </div>
    )
}

export default Manual;
