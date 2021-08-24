import React from 'react';

import { Main } from './style';


const PopUpAprovacoes: React.FC = () => {
  
    
    return (
    <>
        <Main>
            <div>
                <p>Deseja enviar uma solicitação de alteração?</p>
                <button>Não</button>
                <button>Sim</button>
            </div>
        </Main>
    </>
)};

export default PopUpAprovacoes;