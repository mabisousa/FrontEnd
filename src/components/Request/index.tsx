import React,{ useCallback, useState  }  from 'react';

import {RiArrowLeftSLine} from 'react-icons/ri';

import { Background, Container } from './style';

import { i18n } from '../../translate/i18n';
import api from '../../services/api';

interface MostrarRequest {
  responsavel: {
    idResponsavel: number,
  },
  consultor: {
    idConsultor: number,
  },
  mostrarRequisicao: (args0: boolean) => void
}
interface RequisicaoProps {
    consultor: {
      idConsultor: number
    },
    responsavel: {
      idResponsavel: number,
    },
    requisicaoDescricao: string
}
const Request: React.FC<MostrarRequest> = ({ consultor, responsavel, mostrarRequisicao}) => {

  const [conteudo, newConteudo] = useState('');
  const [revisao, setRevisao] = useState(false);

  const requisicao = {
    consultor: {
      idConsultor: 0
    },
    responsavel: {
      idResponsavel: 0
    },
    requisicaoDescricao: ""
  }

  const confirmarRequisicao = useCallback(() => {
    setRevisao(true);
  }, []);

  const enviarRequisicao = useCallback(async () => {

    try {
      requisicao.requisicaoDescricao = conteudo
      requisicao.consultor.idConsultor = consultor.idConsultor
      requisicao.responsavel.idResponsavel = responsavel.idResponsavel

      api.post(`requisicoes/inserir`,requisicao).then((response) => {
        console.log(response.data)
      })
    } catch(e) {
      console.log(e)
    }
    mostrarRequisicao(false)
  }, [consultor.idConsultor, conteudo, mostrarRequisicao, requisicao, responsavel.idResponsavel]);


  return (
    <>
    <Background > 
        <Container id="request" send={!!revisao}>
        {!revisao ? 
        <>
          <div>
            <RiArrowLeftSLine onClick={() => mostrarRequisicao(false)}/>
            <p>
              {i18n.t('request.request')}
            </p>
          </div>
          <textarea id="text"
            value={conteudo}
            onChange={e => newConteudo(e.target.value)}
          />
          <button onClick={confirmarRequisicao}>
            {i18n.t('request.send')}
          </button>
        </>
      :
          <>
            <div>
                <p>
                  {i18n.t('request.confirm')}
                </p>
              </div>
              <div>
                <button onClick={() => setRevisao(false)}>
                  {i18n.t('request.no')}
                </button>
                <button onClick={enviarRequisicao}>
                  {i18n.t('request.yes')}
                </button>
              </div>
            </>
        }    
        </Container>
    </Background>

    </>
  )
};

export default Request;