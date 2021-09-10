import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import {RiArrowLeftSLine} from 'react-icons/ri';
import { closeRequest } from "../../pages/Aprovacao/script"
import { Main } from './style';


const Request: React.FC = () => {

    const [isConfirm, setConfirm] = useState(false);
    const [content, newContent] = useState('');

    const backRequest = useCallback(() => {
        setConfirm(false);
    }, []);
    const handleRequest = useCallback(() => {
        setConfirm(true);
    }, []);
    const handleSubmit = useCallback(() => {
        if(isConfirm) {
            console.log(content)
        }
    }, [isConfirm, content]);

    return (
    <>
        <Main id="request" confirm={isConfirm}>
            {!!isConfirm ? 
                <>
                    <div>
                        <RiArrowLeftSLine onClick={backRequest}/>
                        <p>Insira sua Solicitação:</p>
                    </div>
                    <textarea id="text"
                        value={content}
                        onChange={e => newContent(e.target.value)}
                    >
                    </textarea>      
                    <button onClick={handleSubmit}>Enviar</button>
                </>
                :
                <>
                    <p>Deseja enviar uma solicitação de alteração?</p>
                    <div>
                        <button onClick={closeRequest}>Não</button>
                        <button onClick={handleRequest}>Sim</button>
                    </div>
                </>
            }
            
        </Main>
    </>
)};

export default Request;

/*import React from 'react';

import { Container } from './style';

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

export default PopUpAprovacoes;*/