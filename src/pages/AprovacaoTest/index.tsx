import React, { useCallback, useRef, useState, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { format } from "date-fns";

import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, 
    Requisicao, Step, Descriptions, Tr, Info } from "./style";

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

const AprovacaoTest: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const [theme, setTheme] = useState(light);
    const [consultores, setConsultores] = useState<Consultor[]>([]);
    const [consultor, setConsultor] = useState<Consultor>();
    const [descricao, setDescricao] = useState<Apontamento>();
    const [popup, setPopupState] = useState(false);
    const [popupDescricao, setPopupDescricao] = useState(false);
    const [apontamentoSelecionado, setApontamentoSelecionado] = useState(false)
    const [mostrarRequisicao, setMostrarRequisicao] = useState(false);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

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
    
    const selecionarConsultor = useCallback((idConsultor: number) => {
        api.get(`consultores/${idConsultor}`).then((response)=> {
            setConsultor(response.data);
        })
        setPopupState(false);
    },[setConsultor])

    const aprovacao = {
        consultor: {
            idConsultor: 0
        },
        responsavel: {
            idResponsavel: 0
        },
        apontamentos: [
            { 
                idApontamento: 3,
            },
            { 
                idApontamento: 2,
            }
        ],
        valorHora: 0
    }

    const selecionarApontamento = useCallback(async (id: number, horas: number) => {
        setApontamentoSelecionado(!apontamentoSelecionado);
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

    const enviarAprovacao = useCallback(async () => {

        try {
            if(consultor) {
                aprovacao.consultor.idConsultor = consultor.idConsultor;
                aprovacao.valorHora = consultor.consultorValorHora;
            }
            aprovacao.responsavel.idResponsavel = responsavel.idResponsavel;
            aprovacao.apontamentos = aprovacao.apontamentos
            .filter(apontamento => apontamento.idApontamento !== 0);

        console.log(aprovacao)
            
        api.post(`aprovacoes/inserir`,aprovacao);
        } catch(e) {
            console.log(e)
        }
        
    },[aprovacao, consultor, responsavel.idResponsavel])

    const mostrarPopupRequisicao = useCallback((state: boolean) => {
        setMostrarRequisicao(state)
    },[setMostrarRequisicao]);
                        
    const alocacoesfiltradas = consultor?.consultorAlocacoes.map(alocacao => 
    alocacao.apontamentos.filter(apontamento => apontamento.apontamentoSituacao === "ESPERA"))
    
    return (
        <>
        {mostrarRequisicao && consultor && <Request responsavel={responsavel} consultor={consultor} mostrarRequisicao={mostrarPopupRequisicao}/> }
          <Profile/>
          <Menu />
          <Header toggleTheme={toggleTheme}>
            <p>
              {i18n.t('approval.titleHeader')}
            </p>
          </Header>
          <Title>
            {i18n.t('approval.titleHeader')}
          </Title>
          <Container>
            <Infos>
              <Form ref={formRef} id="aprovar" onSubmit={ enviarAprovacao }>
                <h1>
                  {i18n.t('approval.consultantInfo')}
                </h1>
                <div className="information">
                  <div className="holding">
                    <Info>
                      {consultor ? consultor.idConsultor : i18n.t('approval.registration')}
                    </Info>
                    <Info>
                      {consultor ? consultor.consultorNome : i18n.t('approval.name')}
                    </Info>
                  </div>
                </div>
                <h1>
                  {i18n.t('approval.approvalInfor')}
                </h1>
                <div className="information">
                  <div className="holding">
                    <Info>
                      {responsavel ? responsavel.responsavelNome :  i18n.t('approval.responsible')}
                    </Info>
                  </div>
                  <div className="holding">
                    <p>
                      { i18n.t('approval.totalHours')}
                    </p>
                    <Info>
                    00h
                    </Info>
                    <p>
                      {i18n.t('approval.hourlyRate')}
                    </p>
                    <Info>
                    {consultor ? consultor.consultorValorHora : "R$ 00,00"}
                    </Info>
                  </div>
                </div>
              </Form>
            </Infos>
            <Count id="count">
              <h1> {i18n.t('approval.approvals')}</h1>
              <div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {0}
                    </p>
                  </div>
                  <p>
                    {i18n.t('approval.appointments')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {0}
                    </p>
                  </div>
                  <p>
                    {i18n.t('approval.approved')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {0}
                    </p>
                  </div>
                  <p>
                    {i18n.t('approval.disapprove')}
                  </p>
                </div>
              </div>
                <button id="visualizar" onClick={() => setPopupState(true) }>
                    {i18n.t('approval.consultants')}
                </button>
                <Requisicao request={!!apontamentoSelecionado}>
                    <button onClick={() => setMostrarRequisicao(!mostrarRequisicao)}>
                        {i18n.t('approval.buttonDisapprove')}
                    </button>
                </Requisicao>
            </Count>
            <Apontamentos>
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>
                      {i18n.t('approval.date')}
                    </td>
                    <td>
                      {i18n.t('approval.hour')}
                    </td>
                    <td>
                      {i18n.t('approval.info')}
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
                                        { i18n.t('approval.description')}
                                        <span/>
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
                  {i18n.t('approval.registrationAcconplished')}
                </p>
                <p>
                  {i18n.t('approval.supplierApproval')}
                </p>
                <p>
                  {i18n.t('approval.managerApproval')}
                </p>
                <p>
                  {i18n.t('approval.requisition')}
                </p>
              </div>
              <div className="steps">
                <Step isActive={true}>
                  <FiCheck/>
                </Step>
                <Step isActive={false} >
                  { !!false ? <FiCheck/> : <VscChromeClose/> }
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
              </div>
            </ProgressBar>
            <button form="aprovar" id="finalizar" type="submit">{i18n.t('approval.finish')}</button>
          </Container>
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
    {/* } */}
    </>
  )
}

export default AprovacaoTest;