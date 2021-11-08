import React, { useCallback, useRef, useState, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { format } from "date-fns";

import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, 
    Step, Descriptions, Tr, Info } from "./style";

import { VscChromeClose } from 'react-icons/vsc';
import { GoChevronDown } from 'react-icons/go';
import { FiCheck } from 'react-icons/fi';
import { BsX } from "react-icons/bs";

import Request from "../../components/Request";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import api from "../../services/api";

import { i18n } from "../../translate/i18n";

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

interface Consultor{
  idConsultor: number,
  consultorNome: string,
  consultorStatus: string,
  consultorValorHora: number,
  consultorAlocacoes: [
    {
      skill: {
        skillNome: string
      },
      apontamentos: [
        {
          idApontamento: number,
          horasTrabalhadas: number,
          apontamentoData: Date,
          apontamentoDescricao: string,
          apontamentoSituacao: string
        }
      ],
      horasTotais: number,
      horasTrabalhadas: number
    }
  ]
}
interface Apontamento {
    idApontamento: number,
    horasTrabalhadas: number,
    apontamentoData: Date,
    apontamentoDescricao: string,
    apontamentoSituacao: string,
}
interface Selecionados {
      idApontamento: number,
}
interface tema{
  alternarTema(): void
}

const AprovacaoTest: React.FC<tema> = ({alternarTema}) => {

    const formRef = useRef<FormHandles>(null);

    const [theme, setTheme] = useState(light);
    const [consultores, setConsultores] = useState<Consultor[]>([]);
    const [consultor, setConsultor] = useState<Consultor>();
    const [descricao, setDescricao] = useState<Apontamento>();
    const [popup, setPopupState] = useState(false);
    const [popupDescricao, setPopupDescricao] = useState(false);
    const [apontamentoSelecionado, setApontamentoSelecionado] = useState(false)
    const [mostrarRequisicao, setMostrarRequisicao] = useState(false);
    const [finalizado, setFinalizado] = useState(false);

    useEffect(()=> {
        api.get(`consultores`).then((response)=> {
            setConsultores(response.data);
        })
    })

    let value = localStorage.getItem("@WEGusers:responsavel")
    let responsavel!: { idResponsavel: number; responsavelNome: string };

    if(value) {
        responsavel = JSON.parse(value);
    }
    const aprovacao = {
      consultor: {
          idConsultor: 0
      },
      responsavel: {
          idResponsavel: 0
      },
      apontamentos: [
          { 
              idApontamento: 0,
          }
      ],
      valorHora: 0
    }
    const selecionarConsultor = useCallback((idConsultor: number) => {
        api.get(`consultores/${idConsultor}`).then((response)=> {
            setConsultor(response.data);
            setFinalizado(false)
        })
        setPopupState(false);
    },[setConsultor])
    const [selecionados,setSelecionados] = useState<Selecionados[]>([]);

    const selecionarApontamento = useCallback(async (id: number, horas: number) => {
    
      if(selecionados.find(selecionado => selecionado.idApontamento  === id)) {
        setSelecionados(selecionados.filter(apontamento => apontamento.idApontamento !== id))
        setApontamentoSelecionado(false);

      } else {
        selecionados.push({idApontamento: id})
        setSelecionados(selecionados)
        setApontamentoSelecionado(true);

        }
    },[apontamentoSelecionado])

    const exibirDescricao = useCallback((apontamento: Apontamento) => {


      if(!descricao) {
        setPopupDescricao(!popupDescricao)
      }
        if(apontamento === descricao) {
            setPopupDescricao(!popupDescricao)
        } 
        setDescricao(apontamento)

    },[descricao, popupDescricao])
    let alocacoesfiltradas = consultor?.consultorAlocacoes.map(alocacao => 
      alocacao.apontamentos.filter(apontamento => apontamento.apontamentoSituacao === "ESPERA"))
    
      const enviarAprovacao = useCallback(async () => {
     if(consultor) {
        try {
            
                aprovacao.consultor.idConsultor = consultor.idConsultor;
                aprovacao.valorHora = consultor.consultorValorHora;
            
            aprovacao.responsavel.idResponsavel = responsavel.idResponsavel;
            aprovacao.apontamentos = selecionados;

        api.post(`aprovacoes/inserir`,aprovacao).then(() => {
          api.get(`consultores/${consultor.idConsultor}`).then((response)=> {
            setConsultor(response.data);
            setFinalizado(true);
          })
        })
        
        } catch(e) {
            console.log(e)
        }
      }
    },[aprovacao, consultor, responsavel.idResponsavel])

    const mostrarPopupRequisicao = useCallback((state: boolean) => {
        setMostrarRequisicao(state)
    },[setMostrarRequisicao]);
    
    let horasTotais = 0;
    let apontamentosconsultor = 0;
    let apontamentosaprovados = 0;
    let apontamentosreprovados = 0;

    consultor?.consultorAlocacoes.map(alocacao => {

      horasTotais += alocacao.horasTotais
      apontamentosconsultor += alocacao.apontamentos.length;

      alocacao.apontamentos.map(apontamento => {
        if(apontamento.apontamentoSituacao === "APROVADO") {
          apontamentosaprovados++;
        } else if(apontamento.apontamentoSituacao === "REPROVADO") {
          apontamentosreprovados++;
        }
      })
    })

    return (
        <>
        {mostrarRequisicao && consultor && <Request selecionados={selecionados} responsavel={responsavel} consultor={consultor} mostrarRequisicao={mostrarPopupRequisicao}/> }
          <Profile/>
          <Menu />
          <Header alternarTema={alternarTema}>
            <p>
              {i18n.t('aprovacao.titulo')}
            </p>
          </Header>
          <Title>
            {i18n.t('aprovacao.titulo')}
          </Title>
          <Container>
            <Infos>
              <Form ref={formRef} id="aprovar" onSubmit={ enviarAprovacao }>
                <h1>
                  {i18n.t('aprovacao.consultorInfo')}
                </h1>
                <div className="information">
                  <div className="holding">
                    <Info>
                      {consultor ? consultor.idConsultor : i18n.t('aprovacao.cadastro')}
                    </Info>
                    <Info>
                      {consultor ? consultor.consultorNome : i18n.t('aprovacao.nome')}
                    </Info>
                  </div>
                  
                </div>
                <h1>
                  {i18n.t('aprovacao.aprovacaoInfo')}
                </h1>
                <div className="information">
                  <div className="holding">
                  <Info>
                      {responsavel ? responsavel.idResponsavel :  "ID"}
                    </Info>
                    <Info>
                      {responsavel ? responsavel.responsavelNome :  i18n.t('aprovacao.responsavel')}
                    </Info>
                  </div>
                  
                </div>
              </Form>
            </Infos>
            <Count id="count">
              <h1> {i18n.t('aprovacao.aprovacoes')}</h1>
              <div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {apontamentosconsultor}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.apontamentos')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {apontamentosaprovados}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.aprovado')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {apontamentosreprovados}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.reprovado')}
                  </p>
                </div>
              </div>
                <button id="visualizar" onClick={() => setPopupState(true) }>
                    {i18n.t('aprovacao.consultor')}
                </button>
                
            </Count>
            <Apontamentos>
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>
                      {i18n.t('aprovacao.data')}
                    </td>
                    <td>
                      {i18n.t('aprovacao.hora')}
                    </td>
                    <td>
                      {i18n.t('aprovacao.info')}
                    </td>
                  </tr>
                </thead>
                <tbody>

                {alocacoesfiltradas && alocacoesfiltradas.map(alocacao => 
                        alocacao.map(apontamento => 
                            <tr key={apontamento.idApontamento}>
                                <td>
                                    <input type="checkbox" value={apontamento.idApontamento} onClick={() => selecionarApontamento(apontamento.idApontamento, apontamento.horasTrabalhadas)}/>
                                </td>
                                <td>
                                    {apontamento.apontamentoData}
                                </td>
                                <td>
                                    {apontamento.horasTrabalhadas}
                                </td> 
                                <td>
                                    <button onClick={() => exibirDescricao(apontamento)}>
                                        <GoChevronDown/>
                                    </button>
                                </td>
                                <Descriptions open={!!popupDescricao}>
                                    <header>
                                        { i18n.t('aprovacao.descricao')}
                                    </header>
                                    <div>
                                        <p>
                                            {descricao && descricao.apontamentoDescricao}
                                        </p>
                                    </div>
                                </Descriptions>
                            </tr> 
                        )
                    )}
                      
                </tbody>
              </table>
            </Apontamentos>
            <ProgressBar>
              <div className="headers">
                <p>
                  {i18n.t('aprovacao.registroEfetuado')}
                </p>
                <p>
                  {i18n.t('aprovacao.aprovacaoFornecedor')}
                </p>
                <p>
                  {i18n.t('aprovacao.aprovacaoGestor')}
                </p>
                <p>
                  {i18n.t('aprovacao.requisicao')}
                </p>
              </div>
              <div className="steps">
                <Step isActive={true}>
                  <FiCheck/>
                </Step>
                <Step isActive={!!finalizado} >
                  { !!finalizado ? <FiCheck/> : <VscChromeClose/> }
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
              </div>
            </ProgressBar>
            {!!apontamentoSelecionado &&
                <button className="buttons" id="reprovar" onClick={() => setMostrarRequisicao(!mostrarRequisicao)}>
                  {i18n.t('aprovacao.reprovar')}
                </button>
              }
            <button form="aprovar" className="buttons" type="submit">{i18n.t('aprovacao.finalizar')}</button>
          </Container>
          {popup &&
            <Consultores show={popup}>
            <div id="hold">
              <table>
              <thead>
                <tr>
                  <td>
                    CADASTRO
                  </td>
                  <td>
                    NOME
                  </td>
                  <td>
                    STATUS
                  </td>
                </tr>
              </thead>
              <tbody>
                  {consultores.map(consultor => 
                      <Tr key={consultor.idConsultor} color={"ATIVO"}
                          onClick={() => selecionarConsultor(consultor.idConsultor)}>
                          <td>
                              {consultor.idConsultor}
                          </td>
                          <td>
                              {consultor.consultorNome}
                          </td>
                          <td>
                              {consultor.consultorStatus}
                          </td> 
                      </Tr>
                  )}
              </tbody>
              </table>
              <button onClick={() => setPopupState(false)}>
                <BsX/>
              </button>
            </div>
          </Consultores>
          }
    </>
  )
}

export default AprovacaoTest;