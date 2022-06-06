import * as React from 'react'
import "./customListaIrrigacao.css";
import "./custom.css"
import axios from 'axios';
import { Formik } from 'formik';
import {toast} from 'react-toastify';
import cardBanner from '../fotos/cardBanner.png'

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
        <div className='row justify-content-center pb-3'>
                {irrigacaoList.map((irrigacao) => {
                    return (
                        <div className=' col-sm-12 card py-2 col-md-2 bg-body border rounded border-success bannerPerfil'>
                            <Formik
                                initialValues={{
                                    planta: irrigacao.planta.toString()
                                }}

                                onSubmit={onSubmit}

                                render={({ values, handleSubmit }) => (
                                    <form className="painelPerso" onSubmit={handleSubmit}>

                                        <img className= "cardBanner" src={cardBanner} alt="cardBanner"/>

                                        <p> <strong className='text-info'>Cultura: </strong>{irrigacao.planta} </p>
                                        <p> <strong className='text-info'>Tempo de Irrigação: </strong>{irrigacao.irrigationTime}s</p>
                                        <p> <strong className='text-info'>Temperatura: </strong>{irrigacao.temperature}ºC</p>
                                        <p> <strong className='text-info'>Umidade do Solo: </strong>{irrigacao.minimumSoilHumidity}%</p>
                                        <p> <strong className='text-info'>Ativo: </strong>{irrigacao.active.toString()} </p>
                                        
                                        <div className='row '>
                                            <div className='col-12 text-center'>
                                                <button className="btn-success px-3" type="submit">Ativar</button>
                                            </div>

                                            {/* Reativar caso continue com a ideia de excluir perfil
                                            <div className='col-12 text-center botaoLista'>
                                                <button className="btn-danger px-3" type="submit">Excluir Perfil</button>
                                            </div>
                                            */}
                                        </div>
                                    </form>
                                )}
                            ></Formik>
                        </div>);
                })}
            </div>
    )
}

export default CustomListaIrrigacao;

