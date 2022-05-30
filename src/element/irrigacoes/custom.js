import * as React from 'react'
import "./custom.css";
import axios from 'axios';
import { Formik, Field } from 'formik';
import CustomListaIrrigacao from './customListaIrrigacao';

function Custom() {

    function onSubmit(values, actions) {
        console.log(values)
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/create/' + values.planta, values)
            .then((response) => {
                window.alert('Cadastrado com sucesso!')
            })
    }
    return (
        <div className="container-fluid">
            <div className='row pt-5 mt-2'>
                <div className='col-12'>
                    <h1 className='text-success text-center'>Selecione o Perfil de irrigação customizado</h1>
                </div>
            </div>

            <br></br>

            <CustomListaIrrigacao />

            <div className='row'>
                <div className='col-5 text-center'>
                    <div className='card p-3 bg-body border border-success rounded'>

                        <Formik
                            initialValues={{
                                active: 'false',
                                irrigationTime: '',
                                minimumSoilHumidity: '',
                                planta: '',
                                temperature: ''
                            }}

                            onSubmit={onSubmit}
                            render={({ values, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Nome do perfil: </label>
                                        <Field name="planta" type="text" />
                                    </div>
                                    
                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Temperatura: </label>
                                        <Field name="temperature" type="number" />
                                    </div>

                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Umidade mínima do solo:</label>
                                        <Field name="minimumSoilHumidity" type="number" />
                                    </div>

                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Tempo de irrigação:</label>
                                        <Field name="irrigationTime" type="number" />
                                    </div>
                                    
                                    <button className="btn-success " type="submit">Cadastrar</button>
                                </form>
                            )}
                        ></Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom;

