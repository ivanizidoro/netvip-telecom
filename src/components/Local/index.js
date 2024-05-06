/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { Containerlocal } from "./styles";

function Local(){
    return(
        <Containerlocal>
        <h1>Nossa Localização</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4311214124077!2d-35.25638422319456!3d-7.849866192171658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba1e4278add25%3A0xbf498d0759c54990!2sNETVIP%20Provedor%20de%20Internet!5e0!3m2!1spt-BR!2sbr!4v1714268340766!5m2!1spt-BR!2sbr"></iframe>
      </Containerlocal>
    )
}

export default Local