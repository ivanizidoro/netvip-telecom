import React, { useState } from "react";
import Top from "../../components/Top";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MenuMobile from "../../components/MenuMobile";


import {
  Container,
  ContainerLabel,
  Button,
  ContainerForm
} from "./styles"

function From() {

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
            <div className="selects">
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
        <Footer />
      </Container>
    </>
  )

}



export default From