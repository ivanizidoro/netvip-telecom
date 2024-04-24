import React from "react";

import { H1, Container, Img, ContainerItens } from "./styles"
import plano30 from "../../assets/30.png"
import plano100 from "../../assets/100.png"
import plano200 from "../../assets/200.png"
import plano300 from "../../assets/300.png"
import plano400 from "../../assets/400.png"
import plano600 from "../../assets/600.png"


function planos() {

  return (
    <Container>
      <H1>NOSSO PLANOS</H1>
      <ContainerItens>
        <Img src={plano30} />
        <Img src={plano100} />
        <Img src={plano200} />
        <Img src={plano300} />
        <Img src={plano400} />
        <Img src={plano600} />
      </ContainerItens>
    </Container>
  )

}

export default planos