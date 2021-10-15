import React,{ useCallback, useState  }  from 'react';

import {RiArrowLeftSLine} from 'react-icons/ri';

import { Container } from './style';

import { i18n } from '../../translate/i18n';

const Request: React.FC = () => {

  const [isConfirm, setConfirm] = useState(false);
  const [content, newContent] = useState('');

  const handleBackRequest = useCallback(() => {
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
      <Container id="request" confirm={isConfirm}>
        {!!isConfirm ? 
          <>
            <div>
              <RiArrowLeftSLine onClick={handleBackRequest}/>
              <p>
                {i18n.t('request.request')}
              </p>
            </div>
            <textarea id="text"
              value={content}
              onChange={e => newContent(e.target.value)}
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