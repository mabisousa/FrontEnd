import React, { useCallback, useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { Container, Descricoes } from './style';
import { i18n } from '../../translate/i18n';
import api from '../../services/api';
import { format, parseISO } from 'date-fns';
import { GoChevronDown } from 'react-icons/go';

interface Listagen{
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
      alocacao: {
        skill: {
          skillNome: string,
        }
      },
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
  horasTrabalhadas: number,
  apontamentoData: string,
  apontamentoDescricao: string,
  apontamentoSituacao: string,
}

interface Selecionados {
  idApontamento: number,
}


const TabelaConsultor: React.FC = () => {

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [aprovacoes, setAprovacoes] = useState<Listagen[]>([]);
  const [descricao, setDescricao] = useState<Apontamento>();
  const [popupDescricao, setPopupDescricao] = useState(false);

  useEffect(() => {
    api.get(`/aprovacoes`).then((response) => {
      setAprovacoes(response.data)
    })

  }, []);

  const exibirDescricao = useCallback((apontamento: Apontamento) => {
    if(!descricao) {
      setPopupDescricao(!popupDescricao)
    }
    if(apontamento === descricao) {
      setPopupDescricao(!popupDescricao)
    } 
    setDescricao(apontamento)
  },[descricao, popupDescricao])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    console.log(aprovacoes.map((aprovacao) => (aprovacao.apontamentos.map((apontamentos) => apontamentos.apontamentoSituacao === "APROVADO"))))
  return (
    <> 
      <Container>
        {aprovacoes.map((aprovacao) => (
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '90%'}} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }} className="cabecalho">
                  <p>0001</p>
                  <p>{aprovacao.consultor.consultorNome}</p>
                  <p>{format(parseISO(aprovacao.data), "dd'/'MM'/'yyyy")}</p>
                  { /*responsavel && responsavel.fornecedorAlocacoes.length > 0 ? 
                    responsavel.fornecedorAlocacoes.map((alocacao) => (
                      <Card id={alocacao.projeto.id} key={alocacao.projeto.id} mostrar={mostrarCard}/> 
                    ))
                    : consultor && consultor.consultorAlocacoes.length > 0? 
                    consultor.consultorAlocacoes.map((alocacao) => (
                      <Card id={alocacao.projeto.id} key={alocacao.projeto.id} mostrar={mostrarCard}/> 
                    ))
                    : <h1>
                        {i18n.t('projetos.projetosAlocados')}
                        
                      </h1>
                    */}
                  <p>{aprovacao.apontamentos.map((apontamentos) => apontamentos.apontamentoSituacao === "APROVADO").length}
                  /
                    {aprovacao.apontamentos.length}
                    </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="cabecalhoDetalhe">
                  <p>{aprovacao.consultor.consultorNome}</p>
                  <p>{format(parseISO(aprovacao.data), "dd'/'MM'/'yyyy")}</p>
                </div>
                <div className="detalhe">
                  <div id="informacoes">
                    <h1>{i18n.t('listagem.infos')}</h1>
                    <div id="responsavel">
                      <p>{i18n.t('listagem.responsavel')} </p>
                      <p>{aprovacao.responsavel.responsavelNome}</p>
                    </div>
                    <div id="valorAprovado">
                      <p>{i18n.t('listagem.valorApro')}</p>
                      <p>R$5,000,00</p>
                    </div>
                    <div id="valorHora">
                      <p>{i18n.t('aprovacao.valorHora')}</p>
                      <p>R${aprovacao.valorHora}</p>
                    </div>
                    <div id="horasAprovadas">
                      <p>{i18n.t('listagem.horasAprovadas')}</p>
                      <p>{aprovacao.horasAprovadas}</p>
                    </div>
                    <div id="totalAprovados">
                      <p>{i18n.t('listagem.totalAprovados')}</p>
                      <p>{aprovacao.apontamentos.length}</p>
                    </div>
                  </div>
                  <div id="apontamentos">
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
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Container>
    </>
  )
};

export default TabelaConsultor;
