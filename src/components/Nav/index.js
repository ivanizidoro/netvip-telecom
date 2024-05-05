/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import { RiMenu3Fill } from "react-icons/ri";

import {
    ContainerNav,
    Image
} from "./styles"

import Logo from "../../assets/Logo.png"


function Nav({ setMenuIsVisible }) {

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
        <ContainerNav>
            <Image src={Logo} />
            <nav>
                <a onClick={Home}>PRINCIPAL</a>
                <a onClick={Sobre}>QUEM SOMOS</a>
                <a onClick={Planos}>PLANOS</a>
                <a onClick={Local}>NOSSA LOCALIZAÇÃO</a>
                <a href="#">CONTATOS</a>
            </nav>
            <section>
            <RiMenu3Fill onClick={() => setMenuIsVisible(true)} size={30}/>
            </section>
        </ContainerNav>
    )

}

export default Nav