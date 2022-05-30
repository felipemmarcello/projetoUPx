import * as React from 'react'
import "./custom.css";
import axios from 'axios';
import { Formik } from 'formik';
import {toast} from 'react-toastify';

function CustomListaIrrigacao() {

    const [irrigacaoList, setIrrigacao] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/list')
        
            .then(res => {
                setIrrigacao(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    })

    function onSubmit(values, actions) {
        console.log('SUBMIT', values)
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/' + values.planta)

            .then((response) => {
                toast.success("Irrigação ativa: >" + values.planta + "<");
            })
    }
    return (
        <div className='row pb-3'>
            <div className='col-12 card-group'>
                {irrigacaoList.map((irrigacao) => {
                    return (
                        <div className='card py-3 bg-body border rounded border-success'>
                            <Formik
                                initialValues={{
                                    planta: irrigacao.planta.toString()
                                }}

                                onSubmit={onSubmit}

                                render={({ values, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>

                                        <p> <strong className='text-info'>Planta: </strong>{irrigacao.planta} </p>
                                        <p> <strong className='text-info'>Tempo de Irrigação: </strong>{irrigacao.irrigationTime} </p>
                                        <p> <strong className='text-info'>Temperatura: </strong>{irrigacao.temperature} </p>
                                        <p> <strong className='text-info'>Umidade do Solo: </strong>{irrigacao.minimumSoilHumidity} </p>
                                        <p> <strong className='text-info'>Ativo: </strong>{irrigacao.active.toString()} </p>
                                        
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <button className="btn-success px-3" type="submit">Ativar</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            ></Formik>
                        </div>);
                })}
            </div>
        </div>
    )
}

export default CustomListaIrrigacao;

