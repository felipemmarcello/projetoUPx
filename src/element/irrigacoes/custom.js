import * as React from 'react'
import "./custom.css";
import axios from 'axios';
import { Formik, Field } from 'formik';
import CustomListaIrrigacao from './customListaIrrigacao';
import {toast} from 'react-toastify';

function Custom() {

    function onSubmit(values, actions) {
        console.log(values)
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/', values)
            .then((response) => {
                toast.success("Irrigação personalizada cadastrada: >" + values.planta + "<");
            })
    }

    return (
        <div className="container-fluid paginaCustom">
            <div className='row pt-5 mt-2'>
                <div className='col-12'>
                    <h1 className='text-success text-center'>Selecione o perfil de irrigação customizado</h1>
                </div>
            </div>

            <br></br>
            
            <CustomListaIrrigacao/>

            <div className='row justify-content-center mb-3'>
                <div className='col-5 text-center justify-content-center'>
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
                                        <label className="text-info font-weight-bold pr-2">Cultura: </label>
                                        <Field name="planta" type="text" />
                                    </div>

                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Tempo de irrigação(s):</label>
                                        <Field name="irrigationTime" type="number" />
                                    </div>
                                    
                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Temperatura(ºC): </label>
                                        <Field name="temperature" type="number" />
                                    </div>

                                    <div>
                                        <label className="text-info font-weight-bold pr-2">Umidade mínima do solo (%):</label>
                                        <Field name="minimumSoilHumidity" type="number" />
                                    </div>
                                    
                                    <button className="btn-success botaoCadastrar" type="submit">Cadastrar</button>
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

