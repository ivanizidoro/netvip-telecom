import React from "react";

import { Container, Image, ContainerItens, A } from "./styles"
import Logo from "../../assets/Logo.png"

function nav() {

  return (
    <Container>
      <Image src={Logo} />
      <ContainerItens>
        <A href="#">PRINCIPAL</A>
        <A href="#">QUEM SOMOS</A>
        <A href="#">PLANOS</A>
        <A href="#">NOSSA LOCALIZAÇÃO</A>
        <A href="#">CONTATOS</A>
      </ContainerItens>
    </Container>
  )

}

export default nav