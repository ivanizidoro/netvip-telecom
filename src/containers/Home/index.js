import React from "react";

import {
  H1, Container,
  ContainerPlanos,
  ContainerSobre,
  Containerlocal,
  ContainerTopo,
  ContainerItensTopo,
  A, ContainerNav,
  ContainerItensNav,
  Image,
  ContainerFooter
} from "./styles"
import plano100 from "../../assets/100.png"
import plano200 from "../../assets/200.png"
import plano300 from "../../assets/300.png"
import plano400 from "../../assets/400.png"
import plano600 from "../../assets/600.png"

import Logo from "../../assets/Logo.png"

import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useNavigate } from "react-router-dom";

const spanStyle = {
  padding: '20px',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '1000px'
}
const slideImages = [
  {
    url: 'https://telecominternet.com.br/site/wp-content/uploads/2023/03/plano-30mb-e1681046539700.png',
    caption: ''
  },
  {
    url: 'https://cdn-sites-images.46graus.com/files/photos/14571ed7/e7e0d229-1cfe-40dc-8be8-2a96693171e8/banner2-1000x306.jpg',
    caption: ''
  },
  {
    url: 'https://telecominternet.com.br/site/wp-content/uploads/2023/03/600mb-1-e1681046611117.png',
    caption: ''
  },
];


function Home() {

  const navigate = useNavigate()

  function Home(){
    navigate("/")
  }

  function Assinar(){
    navigate("/assinar")
  }

  return (
    <Container>

      { /* inicio Top */}
      <ContainerTopo>
        <ContainerItensTopo>
          <BsTelephoneForward />
          <A>LIGUE E ASSINE: (81) 3299-7444</A>
          <IoLogoWhatsapp />
          <A href="https://api.whatsapp.com/send/?phone=5581994030800&text&type=phone_number&app_absent=0" target="_blank">WHATSAPP: (81) 99403-0800 / (81) 99789-5571</A>
          <FaInstagram />
          <A href="https://www.instagram.com/netvipprovedor" target="_blank">INSTAGRAM</A>
        </ContainerItensTopo>
        <div>
          <FaRegUser />
          <A href="https://netvippe.sgp.net.br/accounts/central/login" target="_blank">CENTRAL DO ASSINANTE</A>
        </div>
      </ContainerTopo>´
      { /* fim top */}

      { /* inicio nav */}
      <ContainerNav>
        <Image src={Logo} />
        <ContainerItensNav>
          <a onClick={Home}>PRINCIPAL</a>
          <a href="#">QUEM SOMOS</a>
          <a href="#">PLANOS</a>
          <a href="#">NOSSA LOCALIZAÇÃO</a>
          <a href="#">CONTATOS</a>
        </ContainerItensNav>
      </ContainerNav>
      { /* fim nav */}

      { /* inicio slider */}
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      { /* Fim slider */}

      <div className="planos">
        <h2>Planos</h2>
        <H1>FIBRA ÓPTICA</H1>
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

      <ContainerSobre>
        <h1>QUEM SOMOS</h1>
        <a>Somos a NetVIP Telecom, fundamentamos nossa identidade na busca incessante pela excelência em serviços de comunicação, guiados por uma visão de conectar não apenas dispositivos, mas sim pessoas, comunidades e ideias. Desde nossa fundação, cultivamos uma cultura de inovação e compromisso, onde cada colaborador é um agente de transformação, cada cliente um parceiro e cada desafio uma oportunidade de crescimento. Nossa infraestrutura robusta e nossa abordagem centrada no cliente nos capacitam a oferecer soluções personalizadas e confiáveis, adaptadas às necessidades individuais de cada usuário. Mais do que uma provedora de telecomunicações, somos uma ponte para o futuro digital, onde a conectividade é o alicerce para um mundo mais inclusivo, dinâmico e colaborativo, e total dedicação desde 2009.</a>
      </ContainerSobre>

      <Containerlocal>
        <h1>Nossa Localização</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4311214124077!2d-35.25638422319456!3d-7.849866192171658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba1e4278add25%3A0xbf498d0759c54990!2sNETVIP%20Provedor%20de%20Internet!5e0!3m2!1spt-BR!2sbr!4v1714268340766!5m2!1spt-BR!2sbr"></iframe>
      </Containerlocal>

      { /* inicio slider */}
      <ContainerFooter>
        <h1>© COPYRIGHT 2024 NETVIP TELECOM - TODOS OS DIREITOS RESERVADOS</h1>
        <h1>CRIADO POR IVAN IZIDORO.</h1>
      </ContainerFooter>
      { /* Fim footer */}

    </Container>
  )

}

export default Home
