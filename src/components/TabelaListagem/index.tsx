import React, { useCallback, useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Apontamentos, CabecalhoDetalhes, Container, Dados, Descricoes, Detalhes, Informacoes } from './style';
import { i18n } from '../../translate/i18n';
import api from '../../services/api';
import { format, parseISO } from 'date-fns';
import { GoChevronDown } from 'react-icons/go';

interface Listagem{
  consultor: {
    consultorNome: string,
  },
  fornecedor: {
    fornecedorNome: string,
  },
  responsavel: {
    responsavelNome: string,
  },
  apontamentos: [
    {
      idApontamento: number,
      apontamentoData: string,
      apontamentoDescricao: string,
      horasTrabalhadas: number,
      apontamentoSituacao: string,
    },
  ],
  horasAprovadas: number,
  valorHora: number,
  data: string
}

interface Apontamento {
  idApontamento: number,
  apontamentoData: string,
  apontamentoDescricao: string,
  horasTrabalhadas: number,
  apontamentoSituacao: string,
}

const TabelaConsultor: React.FC = () => {

  const [aprovacoes, setAprovacoes] = useState<Listagem[]>([]);
  const [descricao, setDescricao] = useState<Apontamento>();
  const [popupDescricao, setPopupDescricao] = useState(false);

  useEffect(() => {
    api.get(`/aprovacoes`).then((response) => {
      setAprovacoes(response.data)
    })
  });
  const exibirDescricao = useCallback((apontamento: Apontamento) => {
    if(!descricao) {
      setPopupDescricao(!popupDescricao)

    } else if(apontamento = descricao) {
      setPopupDescricao(!popupDescricao)

    } else if (apontamento != descricao) {
      setDescricao(apontamento)
    }
    setDescricao(apontamento)

  },[descricao, popupDescricao])
  
  return (
    <> 
      <Container>
        {aprovacoes.map((aprovacao) => (
          <div>
            <Accordion sx={{ width: '81vw' }} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                  <p>{1}</p>
                  <p>{aprovacao.consultor.consultorNome}</p>
                  <p>{format(parseISO(aprovacao.data), "dd'/'MM'/'yyyy")}</p>
                  <p>{aprovacao.apontamentos.map((apontamentos) => apontamentos.apontamentoSituacao === "APROVADO").length}
                  /
                    {aprovacao.apontamentos.length}
                    </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CabecalhoDetalhes>
                  <p>{aprovacao.consultor.consultorNome}</p>
                  <p>{format(parseISO(aprovacao.data), "dd'/'MM'/'yyyy")}</p>
                </CabecalhoDetalhes>
                <Detalhes>
                  <Informacoes>
                    <h1>{i18n.t('listagem.infos')}</h1>
                    <Dados>
                      <p>{i18n.t('listagem.responsavel')} </p>
                      <p>{aprovacao.responsavel.responsavelNome}</p>
                    </Dados>
                    <Dados>
                      <p>{i18n.t('listagem.valorApro')}</p>
                      <p>{aprovacao.valorHora * aprovacao.horasAprovadas}</p>
                    </Dados>
                    <Dados>
                      <p>{i18n.t('aprovacao.valorHora')}</p>
                      <p>R$ {aprovacao.valorHora}</p>
                    </Dados>
                    <Dados>
                      <p>{i18n.t('listagem.horasAprovadas')}</p>
                      <p>{aprovacao.horasAprovadas}</p>
                    </Dados>
                    <Dados>
                      <p>{i18n.t('listagem.totalAprovados')}</p>
                      <p>{aprovacao.apontamentos.length}</p>
                    </Dados>
                  </Informacoes>
                  <Apontamentos>
                    <h1>
                      {i18n.t('listagem.apontamento')}
                    </h1>
                    <table>
                      <thead>
                        <tr>
                          <td>{i18n.t('aprovacao.data')}</td>
                          <td>{i18n.t('aprovacao.hora')}</td>
                          <td>{i18n.t('listagem.descricao')}</td>
                        </tr>
                      </thead>
                      <tbody>
                      {aprovacao.apontamentos.map((apontamento) => (
                        <tr>
                          <td>{format(parseISO(apontamento.apontamentoData), "dd'/'MM'/'yyyy")}</td>
                          <td>{apontamento.horasTrabalhadas}</td>
                          <td>
                            <button onClick={() => exibirDescricao(apontamento)}>
                              <GoChevronDown/>
                            </button>
                          </td>
                          <Descricoes open={!!popupDescricao}>
                            <header>
                              { i18n.t('aprovacao.descricao')}
                            </header>
                            <div>
                              <p>
                                {descricao && descricao.apontamentoDescricao}
                              </p>
                            </div>
                          </Descricoes>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </Apontamentos>
                </Detalhes>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Container>
    </>
  )
};

export default TabelaConsultor;
