import React from 'react';

import { Container } from './style';
import {RiArrowLeftSLine} from 'react-icons/ri';

const PopUpAprovacoes: React.FC = () => {
  
    
    return (
    <>
        <Container>
            <div className="container">
                <div>
                    <RiArrowLeftSLine />
                    <p>Insira sua Solicitação:</p>
                </div>
                <textarea ></textarea>      
                <button>Enviar</button>
            </div>
        </Container>
    </>
)};

export default PopUpAprovacoes;