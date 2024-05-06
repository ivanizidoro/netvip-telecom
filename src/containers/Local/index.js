import React, { useState } from "react";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import Local from "../../components/Local";
import Footer from "../../components/Footer";
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
        <Top />
        <Nav setMenuIsVisible={setMenuIsVisible} />
        <Local />
        <Footer />
      </Container>
    </>
  )

}

export default Home
