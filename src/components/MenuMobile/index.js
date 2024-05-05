/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from './styles'

import { IoClose } from "react-icons/io5";



function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])

  const navigate = useNavigate()

  function Home() {
    navigate("/")
  }
  function Sobre() {
    navigate("/sobre")
  }
  function Planos() {
    navigate("/planos")
  }
  function Local() {
    navigate("/local")
  }


  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a onClick={Home}>PRINCIPAL</a>
        <a onClick={Sobre}>QUEM SOMOS</a>
        <a onClick={Planos}>PLANOS</a>
        <a onClick={Local}>NOSSA LOCALIZAÇÃO</a>
        <a href="#">CONTATOS</a>
      </nav>
    </Container>
  )
}

export default MenuMobile