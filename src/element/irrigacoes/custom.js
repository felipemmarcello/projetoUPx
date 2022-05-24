import * as React from 'react'
import "./custom.css";
import axios from 'axios';
import { Formik, Field } from 'formik';

function Custom(){
    
    function onSubmit(values, actions) {
        console.log('SUBMIT', values)
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/create',values)
        .then((response)=>{
            window.alert('Cadastrado com sucesso ! Precisa atualizar a tela para limpar os campos (preciso arrumar isso)')
            axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/planta/' + values.planta)
        })  
    }

    return(
        <div className="container-fluid">
        <div className='row pt-5 mt-5'>
            <div className='col-12 '>
                <h1 className='text-success text-center'>Preciso de uma consulta da API para obter todos os perfils</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center'>
                <div className='card p-3'>
                <Formik
                    initialValues={{
                        active: false,
                        irrigationTime:'',
                        minimumSoilHumidity:'',
                        planta:'',
                        temperature:''
                    }}
                    onSubmit={onSubmit}
                    render={({values, handleSubmit})=>(
                        <form onSubmit = {handleSubmit}>
                            <div>
                                <label className="text-info font-weight-bold pr-2">Nome do perfil: </label>
                                <Field name="planta" type="text"/>
                            </div>
                            <div>
                                <label className="text-info font-weight-bold pr-2">Temperatura: </label>
                                <Field name="temperature" type="number"/>
                            </div>
                            <div>
                                <label className="text-info font-weight-bold pr-2">Humidade Minima do Solo:</label>
                                <Field name="minimumSoilHumidity" type="number"/>
                            </div>
                            <div>
                                <label className="text-info font-weight-bold pr-2">Tempo de irrigacao:</label>
                                <Field name="irrigationTime" type="number"/>
                        </div>
                            <button className="btn-success" type="submit">Cadastrar</button>
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

