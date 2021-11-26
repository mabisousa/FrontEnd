import React, { useCallback, useEffect, useState } from 'react';

import { Container, Responsavel,Tabela, Infos, Apontamento, Descricao } from './style';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { RiArrowRightSLine } from 'react-icons/ri';

import { i18n } from '../../translate/i18n';
import api from '../../services/api';
import { format, parseISO } from 'date-fns';

interface Consultor{
  idConsultor: number,
  consultorNome: string,
  consultorStatus: string,
  consultorValorHora: number,
  requisicoes: Array<Requisicao>
}

interface Requisicao {
      requisicaoResponsavel: string,
      requisicaoDescricao: string,
      requisicaoData: string,
      apontamentos: [
        {
          idApontamento: number,
          horasTrabalhadas: number,
          apontamentoData: string,
          apontamentoDescricao: string,
          apontamentoSituacao: string
        }
      ]
}
const TabelaRequisicao: React.FC = () => {

  const [consultores, setConsultores] = useState<Consultor[]>([]);
  const [requisicaoSelecionada, setRequisicao] = useState<Requisicao>();

  const selecionarRequisicao = useCallback((requisicao: Requisicao) => {
    setRequisicao(requisicao);
  },[]);

  useEffect(() => {
      api.get(`/consultores`).then((response) => {
        setConsultores(response.data)
      })
  });

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <> 
      <Container>
        <div>
        {consultores && consultores.map(consultor => (

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '81vw'}} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{flexShrink: 0 }} className="cabecalho">
                <p>
                    {consultor.idConsultor}
                </p>
                <p>
                    {consultor.consultorNome}
                </p>
                <section>
                  <p>
                    {i18n.t('requisicoes.solicitadas')} 
                  </p>
                  <p>
                    {consultor.requisicoes.length}
                  </p> 
                </section>

              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Responsavel>
                <p>
                  {i18n.t('listagem.responsavel')} 
                </p>
                <p>
                  Jorge Matheus 
                </p>
              </Responsavel>
              <Infos>
                <Tabela>
                  <table>
                    <thead>
                      <h1>
                        {i18n.t('requisicoes.titulo')}: 
                      </h1>
                    </thead>
                    <tbody>
                    {consultor.requisicoes.map(requisicao => (
                      <tr onClick={() => selecionarRequisicao(requisicao)}>
                        <td>{format(parseISO(requisicao.requisicaoData), "dd'/'MM'/'yyyy")}</td>
                        <RiArrowRightSLine/>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </Tabela>
                <Apontamento>
                    <h1>
                      {i18n.t('listagem.apontamento')}
                    </h1>
                  <p>
                  </p>
                </Apontamento>
                <Descricao>
                  <h1>
                    {i18n.t('listagem.descricao')}:
                  </h1>
                  <p>
                  </p>
                </Descricao>
              </Infos>
            </AccordionDetails>
          </Accordion>
          ))} 

        </div>
      </Container>
    </>
  )
};

export default TabelaRequisicao;
