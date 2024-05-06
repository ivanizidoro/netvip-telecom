/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Container,
    ContainerPlanos
} from "./styles"
import plano100 from "../../assets/100.png"
import plano200 from "../../assets/200.png"
import plano300 from "../../assets/300.png"
import plano400 from "../../assets/400.png"
import plano600 from "../../assets/600.png"

function Planos() {

    const navigate = useNavigate()

    function Assinar() {
        navigate("/assinar")
    }

    return (
        <Container>
            <div className="planos">
                <h2>Planos</h2>
                <h1>FIBRA ÓPTICA</h1>
                <a>Selecione um de nossos planos e venha para o melhor provedor da região!</a>
            </div>

            <ContainerPlanos>
                <div>
                    <img src={plano100} />
                    <a onClick={Assinar} >ASSINE JÁ</a>
                </div>
                <div>
                    <img src={plano200} />
                    <a onClick={Assinar}>ASSINE JÁ</a>
                </div>
                <div>
                    <img src={plano300} />
                    <a onClick={Assinar}>ASSINE JÁ</a>
                </div>
                <div>
                    <img src={plano400} />
                    <a onClick={Assinar}>ASSINE JÁ</a>
                </div>
                <div>
                    <img src={plano600} />
                    <a onClick={Assinar}>ASSINE JÁ</a></div>
            </ContainerPlanos>
        </Container>
    )

}

export default Planos