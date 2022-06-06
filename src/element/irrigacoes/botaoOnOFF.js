import React, { useState } from "react";
import { Formik } from 'formik';
import axios from 'axios';
import "./manual.css";
import {toast} from 'react-toastify';

function BotaoOnOFF() {
    const url = 'https://us-central1-api-irrigacao.cloudfunctions.net/api/placa/state'

    const [botao, setBotao] = useState('')

    function onSubmit(values, actions) {
        axios.post('https://us-central1-api-irrigacao.cloudfunctions.net/api/placa/' + values.status)
            .then((response) => {
                toast.success("Irrigando: >" +values.status+ "<");
            })
    }

    React.useEffect(() => {
        axios.get(url)
            .then((response) => {
                response.data.on = response.data.on.toString();
                setBotao(response.data);
            })
            .catch(() => {
                console.log("Deu errado")
            })
    }, [])

    return (

        <>
            <div>
                <h4 className="text-success">Ativo: <span className="text-info">{botao.on}</span></h4>
                
                <div className="row">

                    <div className="col-6 text-right">
                        <Formik
                            initialValues={{
                                status: 'on'
                            }}

                            onSubmit={onSubmit}

                            render={({ values, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <button className="btn-success px-5" type="submit">Ligar</button>
                                </form>
                            )}
                        ></Formik>
                </div>
                    <div className="col-6 text-left">

                        <Formik
                            initialValues={{
                                status: 'off'
                            }}

                            onSubmit={onSubmit}

                            render={({ values, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <button className="btn-danger px-5" type="submit">Desligar</button>
                                </form>
                            )}
                        ></Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotaoOnOFF;
