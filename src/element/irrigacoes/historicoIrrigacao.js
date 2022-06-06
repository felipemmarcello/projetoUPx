import React from "react";
import axios from 'axios';
import "./manual.css";
import "./historicoIrrigacao.css"

function HistoricoIrrigacao() {
    const [plantas, setPlantas] = React.useState([]);
    
    React.useEffect(() => {
        axios.get('https://us-central1-api-irrigacao.cloudfunctions.net/api/data/listAll')
            .then(res => {
                console.log(res.data)
                
                res.data.forEach(element => {
                    const date = new Date(element.date).toLocaleDateString()
                    const time = new Date(element.date).toLocaleTimeString() 

                    console.log(date)
                    console.log(time)

                    element.date = date;
                    element.time = time;
                });

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
                    return(

                        <div className='p-3'>
                            <p className='text-info'>Umidade do Solo: {planta.humidity}% </p>
                            <p className='text-info'>Data de Irrigação: {planta.date} </p>
                            <p className='text-info'>Hora da Irrigação: {planta.time} </p>
                        </div>
                        
                        );
                })}
            </div>
        </div>
    )
}

export default HistoricoIrrigacao;