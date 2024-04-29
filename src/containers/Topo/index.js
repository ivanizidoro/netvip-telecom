import React from "react";

import { Container, ContainerItens, A } from "./styles";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";




function Topo() {

    return (

        <Container>
            <ContainerItens>
                <BsTelephoneForward />
                <A>LIGUE E ASSINE: (81) 3299-7444</A>
                <IoLogoWhatsapp />
                <A href="https://api.whatsapp.com/send/?phone=5581994030800&text&type=phone_number&app_absent=0" target="_blank">WHATSAPP: (81) 99403-0800 / (81) 99789-5571</A>
                <FaInstagram />
                <A href="https://www.instagram.com/netvipprovedor" target="_blank">INSTAGRAM</A>
            </ContainerItens>
            <div>
                <FaRegUser />
                <A href="https://netvippe.sgp.net.br/accounts/central/login" target="_blank">CENTRAL DO ASSINANTE</A>
            </div>
        </Container>
    )

}

export default Topo
