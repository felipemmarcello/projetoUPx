import React from "react";
import "./equipe.css"
import danilo from "./fotos/danilo.jpg";
import eduardo from "./fotos/eduardo.jpg"
import enzo from "./fotos/enzo.jpg"
import felipe from "./fotos/felipe.jpg"
import leonardo from "./fotos/leonardo.jpg"
import johann from "./fotos/johann.jpg"

function Equipe() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center my-5">

                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Danilo de P. Vieira</h3>

                        <img className="img1" src={danilo} alt="danilo"></img>
                        <p className="email">danzbz07@gmail.com</p>
                        <p className="telefone">(15)99181-9859</p>
                    </div>
                </div>

                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Eduardo F. Rodrigues</h3>

                        <img className="img1" src={eduardo} alt="eduardo"></img>
                        <p className="email">contatoeduardofelipe@hotmail.com</p>
                        <p className="telefone">(15)99631-3063</p>
                    </div>
                </div>

                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Enzo Y. T. Pasqualini</h3>

                        <img className="img1" src={enzo} alt="enzo"></img>
                        <p className="email">enzo.pasqualini@hotmail.com</p>
                        <p className="telefone">(15)99814-1511</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center my-5">
                
                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Felipe M. Marcello</h3>

                        <img className="img1" src={felipe} alt="felipe"></img>
                        <p className="email">felipemmarcello@gmail.com</p>
                        <p className="telefone">(15)99157-1757</p>
                    </div>
                </div>

                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Jason L. Marzeuski</h3>

                        <img className="img1" src={leonardo} alt="leonardo"></img>
                        <p className="email">leomarzeuskii@gmail.com</p>
                        <p className="telefone">(15)98810-8850</p>
                    </div>
                </div>

                <div className="col-md-2 col-sm-12 mt-2">
                    <div className="pessoa1 p-2">
                        <h3>Johann H. Clement</h3>

                        <img className="img1" src={johann} alt="johann"></img>
                        <p className="email">johann_heinrich@outlook.com</p>
                        <p className="telefone">(15)99761-5056</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipe;