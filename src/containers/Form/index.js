import React from "react";
import {
  Container,
  ContainerTopo,
  ContainerItensTopo,
  A, ContainerNav,
  ContainerItensNav,
  Image,
  ContainerFooter,
  ContainerLabel,
  Button,
  ContainerForm
} from "./styles"

import Logo from "../../assets/Logo.png"

import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function From() {

  const navigate = useNavigate()

  function Home(){
    navigate("/")
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

      <ContainerForm>
        <h1>ASSINE JÁ</h1>
        <ContainerLabel>
          <div className="selects">
            <select>
              <option>ESCOLHA SEU PLANO</option>
              <option>PLANO FIBRA ÓPTICA 100MB</option>
              <option>PLANO FIBRA ÓPTICA 200MB</option>
              <option>PLANO FIBRA ÓPTICA 300MB</option>
              <option>PLANO FIBRA ÓPTICA 400MB</option>
              <option>PLANO FIBRA ÓPTICA 600MB</option>
            </select>
          </div>
          <div>
            <select>
              <option>ESCOLHA SEU VENCIMENTO</option>
              <option>DIA 5</option>
              <option>DIA 10</option>
              <option>DIA 15</option>
              <option>DIA 20</option>
              <option>DIA 25</option>
              <option>DIA 30</option>
            </select>
            <div className="cadastro">
              <input type='text' placeholder="NOME" />
              <input type="number" placeholder="TELEFONE" />
              <input type="email" placeholder="E-MAIL" />
              <input type="text" placeholder="ENDEREÇO" />
              <input type="text" placeholder="PONTO DE REFERENCIA" />
            </div>
            <Button>ENVIAR</Button>
          </div>
        </ContainerLabel>
      </ContainerForm>

      { /* inicio slider */}
      <ContainerFooter>
        <h1>© COPYRIGHT 2024 NETVIP TELECOM - TODOS OS DIREITOS RESERVADOS</h1>
        <h1>CRIADO POR IVAN IZIDORO.</h1>
      </ContainerFooter>
      { /* Fim footer */}
    </Container>
  )

}



export default From