import React from 'react';

import { Container } from './style';
import {RiArrowLeftSLine} from 'react-icons/ri';

const PopUpAprovacoes: React.FC = () => {
  
    
    return (
    <>
        <Container>
            <div id="container">
                <div id="header">
                    <RiArrowLeftSLine />
                    <p>Insira sua Solicitação:</p>
                </div>
                <input id="text"></input>      
                <button>Enviar</button>
            </div>
        </Container>
    </>
)};

export default PopUpAprovacoes;