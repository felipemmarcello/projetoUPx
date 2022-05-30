import React from "react";
import axios from 'axios';
import "./manual.css";

function HistoricoIrrigacao() {
    const [plantas, setPlantas] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://us-central1-api-irrigacao.cloudfunctions.net/api/data/listAll')
            .then(res => {
                setPlantas(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (

        <div className='text-center'>
            <div className='card bg-body border rounded border-success'>
                {plantas.map((planta) => {
                    return (
                        <div className='p-3'>
                            <p> <strong className='text-info'>Temperatura: </strong>{planta.temperature} </p>
                            <p> <strong className='text-info'>Umidade do Solo: </strong>{planta.humidity} </p>
                            <p> <strong className='text-info'>Data de Irrigação: </strong>{planta.date} </p>
                        </div>);
                })}
            </div>
        </div>
    )
}

export default HistoricoIrrigacao;
