import React from "react";
import axios from 'axios';
import "./manual.css";
import { Formik, Field } from 'formik';

function Manual(){
    const [plantas, setPlantas] = React.useState([]); 
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
    function onSubmit(values, actions) {
        console.log('SUBMIT', values)
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/data/create',values)
        .then((response)=>{
            console.log("Cadastrado")
            window.alert('Cadastrado com sucesso! Atualize a página para mostrar a nova ocorrência')
        })  
    }

    return(
        <div className="container-fluid">
            <div className='row pt-4 mt-5'>
                <div className='col-6 text-center'>
                    <h1 className='text-success'>Irrigar</h1>
                </div>

                <div className='col-6 text-center'>
                    <h1 className='text-primary'>Histórico de Irrigações</h1>
                </div>
            </div>

            <div className='row'>
                <div className='col-4 text-center'>
                    <div className='card p-3'>
                    <Formik
                        initialValues={{
                            temperature:'',
                            humidity:'',
                            qtdagua:'',
                        }}
                        onSubmit={onSubmit}
                        render={({values, handleSubmit})=>(
                            <form onSubmit = {handleSubmit}>
                                <div>
                                    <label className="text-info font-weight-bold pr-2">Temperatura: </label>
                                    <Field name="temperature" type="text"/>
                                </div>
                                <div>
                                    <label className="text-info font-weight-bold pr-2">Umidade:</label>
                                    <Field name="humidity" type="text"/>
                                </div>
                                <div>
                                    <label className="text-info font-weight-bold pr-2">Quantidade de Água (em mL):</label>
                                    <Field name="qtdagua" type="text"/>
                                </div>

                                <button className="btn-success center" type="submit">Irrigar</button>
                            </form>
                        )}
                    ></Formik>
                    </div>
                </div>
                <div className='col-4 text-center'>
                     <div className='card'>
                     {plantas.map((planta) => { return (
                    <div className='p-3'>
                        <p> <strong className='text-info'>Temperatura: </strong>{planta.temperature} </p>
                        <p> <strong className='text-info'>Umidade do Solo: </strong>{planta.humidity} </p>
                        <p> <strong className='text-info'>Data de Irrigação: </strong>{planta.date} </p>
                        <p> <strong className='text-info'>Quantidade de Água (em mL): </strong>{planta.qtdagua} </p>
                    </div> ); })}
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Manual;
