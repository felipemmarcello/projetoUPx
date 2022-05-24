

import axios from 'axios';
import * as React from 'react'

function Custom(){
    const [assinatura, setAssinatura] = React.useState([])
    const [plantas, setPlantas] = React.useState([]); 
    React.useEffect(() => {
        axios.get("https://us-central1-api-irrigacao.cloudfunctions.net/api/planta")
        .then(res => {
            console.log(res)
            setAssinatura(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    React.useEffect(() => {
        axios.get('https://us-central1-api-irrigacao.cloudfunctions.net/api/data/listAll')
        .then(res => {
            console.log(res)
            setPlantas(res.data)
        })
        .catch((err) => {
        console.log(err);
        });
        }, [])

    return(
        <div className="container-fluid">
            <div className='row pt-5 mt-5'>
                <div className='col-6 text-center'>
                    <h1 className='text-success'>Assinatura Ativa</h1>
                </div>
                <div className='col-6 text-center'>
                    <h1 className='text-primary'>Histórico de Irrigações</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='card pt-3'>
                        <p> <strong className='text-info'>Planta: </strong> {assinatura.planta} </p>
                        <p> <strong className='text-info'>Tempo de Irrigação: </strong>  {assinatura.irrigationTime}</p>
                        <p> <strong className='text-info'>Temperatura: </strong>{assinatura.temperature} </p>
                        <p> <strong className='text-info'>Humidade do Solo: </strong>{assinatura.minimumSoilHumidity} </p>
                    </div>
                </div>
                <div className='col-6'>
                     <div className='card'>
                     {plantas.map((planta) => { return (
                    <div className='p-3'>
                        <p> <strong className='text-info'>Temperatura: </strong>{planta.temperature} </p>
                        <p> <strong className='text-info'>Humidade do Solo: </strong>{planta.humidity} </p>
                        <p> <strong className='text-info'>Data de Irrigacao: </strong>{planta.date} </p>
                    </div> ); })}
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Custom;

