import React, {useState} from "react";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import Planos from "../../components/Planos";
import Sobre from "../../components/Sobre";
import Local from "../../components/Local";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import MenuMobile from "../../components/MenuMobile";

import {
  Container,
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
        <Top/>
        <Nav  setMenuIsVisible={setMenuIsVisible} />
        <Planos />
        <Local />
        <Footer />
      </Container>
    </>
  )

}

export default Home
