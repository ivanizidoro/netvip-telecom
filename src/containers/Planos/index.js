import React from "react";

import { H1, Container, ContainerItens, ContainerSobre, Containerlocal, ContainerFooter } from "./styles"
import plano100 from "../../assets/100.png"
import plano200 from "../../assets/200.png"
import plano300 from "../../assets/300.png"
import plano400 from "../../assets/400.png"
import plano600 from "../../assets/600.png"

function planos() {

  return (
    <Container>
      <div className="planos">
        <h2>Planos</h2>
        <H1>FIBRA ÓPTICA</H1>
        <a>Selecione um de nossos planos e venha para o melhor provedor da região!</a>
      </div>
      <ContainerItens>
        <div>
          <img src={plano100} />
          <a href="#" >ASSINE JÁ</a>
        </div>
        <div>
          <img src={plano200} />
          <a>ASSINE JÁ</a>
        </div>
        <div>
          <img src={plano300} />
          <a>ASSINE JÁ</a>
        </div>
        <div>
          <img src={plano400} />
          <a>ASSINE JÁ</a>
        </div>
        <div>
          <img src={plano600} />
          <a>ASSINE JÁ</a></div>
      </ContainerItens>
      <ContainerSobre>
        <h1>QUEM SOMOS</h1>
        <a>Somos a NetVIP Telecom, fundamentamos nossa identidade na busca incessante pela excelência em serviços de comunicação, guiados por uma visão de conectar não apenas dispositivos, mas sim pessoas, comunidades e ideias. Desde nossa fundação, cultivamos uma cultura de inovação e compromisso, onde cada colaborador é um agente de transformação, cada cliente um parceiro e cada desafio uma oportunidade de crescimento. Nossa infraestrutura robusta e nossa abordagem centrada no cliente nos capacitam a oferecer soluções personalizadas e confiáveis, adaptadas às necessidades individuais de cada usuário. Mais do que uma provedora de telecomunicações, somos uma ponte para o futuro digital, onde a conectividade é o alicerce para um mundo mais inclusivo, dinâmico e colaborativo, e total dedicação desde 2009.</a>
      </ContainerSobre>
      <Containerlocal>
        <h1>Nossa Localização</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4311214124077!2d-35.25638422319456!3d-7.849866192171658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba1e4278add25%3A0xbf498d0759c54990!2sNETVIP%20Provedor%20de%20Internet!5e0!3m2!1spt-BR!2sbr!4v1714268340766!5m2!1spt-BR!2sbr"></iframe>
      </Containerlocal>
      <ContainerFooter>
          
      </ContainerFooter>
    </Container>
  )

}

export default planos
