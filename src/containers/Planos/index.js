import React from "react";

import { H1, Container, ContainerItens, ContainerSobre } from "./styles"
import plano100 from "../../assets/100.png"
import plano200 from "../../assets/200.png"
import plano300 from "../../assets/300.png"
import plano400 from "../../assets/400.png"
import plano600 from "../../assets/600.png"
import Video from "../../assets/Vídeo Comercial NetVip.mp4"


function planos() {

  return (
    <Container>
      <H1>NOSSOS PLANOS</H1>
      <ContainerItens>
        <div>
          <img src={plano100} />
          <button>ASSINE JÁ</button>
        </div>
        <div>
          <img src={plano200} />
          <button>ASSINE JÁ</button>
        </div>
        <div>
          <img src={plano300} />
          <button>ASSINE JÁ</button>
        </div>
        <div>
          <img src={plano400} />
          <button>ASSINE JÁ</button>
        </div>
        <div>
          <img src={plano600} />
          <button>ASSINE JÁ</button></div>
      </ContainerItens>
      <ContainerSobre>
        <video src={Video} autoPlay loop muted/>
        <h1>QUEM SOMOS</h1>
        <a>Somos… o Grupo Netvip , uma equipe altamente qualificada em atender primordialmente nossos clientes com zelo e total dedicação desde 2009.</a>
      </ContainerSobre>

    </Container>
  )

}

export default planos
