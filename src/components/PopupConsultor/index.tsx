import React, { useEffect, useState } from "react";
import { Container, PopUpInfo, Content, Skills, HoldContent, PopUpTable } from "./style";
import { HiUserCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import Grid from "../Grid";
import api from "../../services/api";

interface Consultor{
  id: number;
  nome: string;
  status: string
  projetos: [
    {
      id: number
    }
  ]
}

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

    return(
        <>
         <Container show={!showPopup}>
          <div id="hold">
          <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
          <PopUpInfo>
            <header>
              <HiUserCircle/>
              <div id="EmployeeInformation">
                  <p></p>
                  <p>E-mail: isac_bezerra@empresa.com</p>
              </div>
            </header>
          </PopUpInfo>
          <Content>
            <Skills>
              <h5>SKILLS</h5>
              <HoldContent>
                  <p>UI / UX</p>
                  <p>Desing Responsivo</p>
                  <p>CSS e JavaScript Frameworks</p>
                  <p>ReactJS</p>
                  <p>Bootstrap</p>
                  <p>Debug</p>
                  <p>Git</p>
                  <p>Git</p>
                  <p>Git</p>
                  <p>Git</p>
                  <p>Git</p>
              </HoldContent>
            </Skills>
            <PopUpTable>
              <table>
                <thead>
                  <tr>
                    <td>NÚMERO</td>
                    <td>STATUS</td>
                    <td>PROJETO</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                  <tr>
                    <td>0000000</td>
                    <td>Concluido</td>
                    <td>Restauração de alteradores</td> 
                  </tr>
                </tbody>
              </table>
            </PopUpTable>
          </Content>
          <div id="grid"> 
            <Grid/>
          </div>
          </div>
        </Container>
        </>
    )
}

export default Popup;