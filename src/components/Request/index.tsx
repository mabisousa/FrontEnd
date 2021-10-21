import React,{ useCallback, useState  }  from 'react';

import {RiArrowLeftSLine} from 'react-icons/ri';

import { Container } from './style';

import { i18n } from '../../translate/i18n';

const Request: React.FC = () => {

  const [estaConfirmado, setConfirmado] = useState(false);
  const [conteudo, newConteudo] = useState('');

  const handleBackRequest = useCallback(() => {
    setConfirmado(false);
  }, []);

  const handleRequest = useCallback(() => {
    setConfirmado(true);
  }, []);

  const handleSubmit = useCallback(() => {
    if(estaConfirmado) {
      console.log(conteudo)
    }
  }, [estaConfirmado, conteudo]);

  return (
    <>
      <Container id="request" confirm={estaConfirmado}>
        {!!estaConfirmado ? 
          <>
            <div>
              <RiArrowLeftSLine onClick={handleBackRequest}/>
              <p>
                {i18n.t('request.request')}
              </p>
            </div>
            <textarea id="text"
              value={conteudo}
              onChange={e => newConteudo(e.target.value)}
            />
            <button onClick={handleSubmit}>
              {i18n.t('request.send')}
              </button>
          </>
        :
          <>
            <p>
              {i18n.t('request.change')}
            </p>
            <div>
              <button >
                {i18n.t('request.no')}
              </button>
              <button onClick={handleRequest}>
                {i18n.t('request.yes')}
              </button>
            </div>
          </>
        }   
      </Container>
    </>
  )
};

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