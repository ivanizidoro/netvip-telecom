/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import Planos from "../../components/Planos";
import Sobre from "../../components/Sobre";
import Local from "../../components/Local";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import MenuMobile from "../../components/MenuMobile";
import { IoLogoWhatsapp } from "react-icons/io5";

import {
  Container, ContainerWhats
} from "./styles"


function Home() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <ContainerWhats>
          <a href="https://api.whatsapp.com/send/?phone=5581994030800&text&type=phone_number&app_absent=0" target="_blank">
          <IoLogoWhatsapp />
          </a>
        </ContainerWhats>
        <Top />
        <Nav
          setMenuIsVisible={setMenuIsVisible}
        />
        <Slider />
        <Planos />
        <Sobre />
        <Local />
        <Footer />
      </Container >
    </>
  )

}

export default Home
