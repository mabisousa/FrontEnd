import React, { useCallback, useRef, useState, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { format } from "date-fns";

import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, Buttons, 
    Button, Step, Descriptions, Tr, Info } from "./style";

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
  id: number,
  nome: string,
  status: string,
  skill: string,
  limiteHoras: number,
  valorHoras: number,
  apontamentos: [
    {
        id:number,
        data: string,
        horasTrabalhadas: number,
        descricao: string,
        situacaoApontamento: string,
    }
  ]
}

interface Apontamento {
  id:number,
  data: string,
  horasTrabalhadas: number,
  descricao: string,
  situacaoApontamento: string,
  projeto: {
      id: number,
  }
}

interface Aprovacao {
  data: Date,
  nomeFornecedor: string,
  nomeResponsavel: string,
  idConsultor: number,
  horasAprovadas: number,
  valorHora: number,
  apontamentos: [
    {
      id: number,
    }
  ]
}

const Aprovacao: React.FC = () => {
    
  const [consultants, setConsultants] = useState<Consultor[]>([]);
  const [consultant, setConsultant] = useState<Consultor>();
  const formRef = useRef<FormHandles>(null);
  const [isConfirmed, setConfirm] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [description, setDescription] = useState<Apontamento>();
  const [apontamentos, setApontamentos] = useState<Apontamento[]>([]);

  let responsible = localStorage.getItem("@WEGusers: nome");
  let horasSelecionadas = 0;

  const aprovacao = {
    data: new Date(),  
    nomeFornecedor: "",
    nomeResponsavel: "",
    idConsultor: 0,
    horasAprovadas: 0,
    valorHora: 0,
    apontamentos: [{ id: 0}]
  }
  if(responsible != null) {
    aprovacao.nomeResponsavel = responsible;
  }
  const handleSelectConsult = useCallback((id: number) => {

    api.get(`consultores/${id}`).then((response) => {
      setConsultant(response.data);
    })
    setShowPopup(false);
  },[]);

  const handleApproval = useCallback(async () => {
    try {
      if(consultant) {
        aprovacao.idConsultor = consultant.id;
        aprovacao.valorHora = consultant.valorHoras;
        aprovacao.nomeFornecedor = "carlos";
        aprovacao.horasAprovadas = horasSelecionadas;
        aprovacao.apontamentos = aprovacao.apontamentos
        .filter(apontamento => apontamento.id !== 0)
      }

      api.post("aprovacao/inserir", aprovacao);
      console.log(aprovacao)
    } catch(e) {
      console.log(e);
    }
  },[aprovacao, consultant, horasSelecionadas]);

  const handleSelected = useCallback(async (id, horas) => {
    let alreadySelected;
    let indexSelected = 0;

    aprovacao.apontamentos.map(apontamento => {
      if(apontamento.id === id) {
        alreadySelected = true;
        indexSelected = aprovacao.apontamentos.indexOf(apontamento,0);
      }

    })

    if(alreadySelected === true) {
      horasSelecionadas -= horas;
      aprovacao.apontamentos.splice(indexSelected);
    } else {
      horasSelecionadas += horas;
      aprovacao.apontamentos.push({id: id});
    }
  },[aprovacao]);

  const handleOpenPopup = useCallback((apontamento) => {
      let index = apontamentos.indexOf(apontamento);
      setDescription(apontamentos[index]);

      if(apontamento.id === description?.id) {
        setOpen(!isOpen);
      }

  }, [apontamentos, isOpen, setOpen, description, setDescription]);

  useEffect(() => {
    api.get("/consultores").then((response) => {
      setConsultants(response.data)
    })
    api.get("/apontamentos").then((response) => {
      setApontamentos(response.data)
    })
  }, []);

  const apontamentosaprovados = apontamentos.filter(apontamento => 
    apontamento.situacaoApontamento === "APROVADO")
  ,aprovados = apontamentosaprovados.length;

  const apontamentosreprovados = apontamentos.filter(apontamento => 
    apontamento.situacaoApontamento === "REPROVADO")
  ,reprovados = apontamentosreprovados.length;


    const apontamentoslist = consultant?.apontamentos.
    filter(apontamento => apontamento.situacaoApontamento === "ESPERA");

    let date = new Date();
    const formattedDate = format(date, "dd'/'MM'/'yyyy");

    const [theme, setTheme] = useState(light);

    const alternarTema = () => {
      setTheme(theme.titulo === 'light' ? dark : light);
    };

    return (
        <>
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
              <Form ref={formRef} id="aprovar" onSubmit={ handleApproval }>
                <h1>
                  {i18n.t('aprovacao.consultorInfo')}
                </h1>
                <div className="information">
                  <div className="holding">
                    <Info>
                      {consultant ? consultant.id : i18n.t('aprovacao.cadastro')}
                    </Info>
                    <Info>
                      {consultant ? consultant.nome : i18n.t('aprovacao.nome')}
                    </Info>
                  </div>
                </div>
                <h1>
                  {i18n.t('aprovacao.aprovacaoInfo')}
                </h1>
                <div className="information">
                  <div className="holding">
                    <Info>
                      {consultant ? formattedDate: i18n.t('aprovacao.dataAprovacao')}
                    </Info>
                    <Info>
                      {consultant ? "Responsável" : i18n.t('aprovacao.responsavel')}
                    </Info>
                  </div>
                  <div className="holding">
                    <p>
                      {i18n.t('aprovacao.horasTotais')}
                    </p>
                    <Info>
                      {consultant ?  consultant.limiteHoras +"h" : "00h"}
                    </Info>
                    <p>
                      {i18n.t('aprovacao.valorHora')}
                    </p>
                    <Info>
                      {consultant ? "R$ " + consultant.valorHoras  : "R$ 00,00"}
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
                      {apontamentos.length}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.apontamento')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {aprovados}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.aprovado')}
                  </p>
                </div>
                <div className="hold">
                  <div className="numbers">
                    <p>
                      {reprovados}
                    </p>
                  </div>
                  <p>
                    {i18n.t('aprovacao.reprovado')}
                  </p>
                </div>
              </div>
              <button id="visualizar" onClick={() => setShowPopup(!showPopup)}>
                {i18n.t('aprovacao.consultor')}
              </button>
              <Buttons id="buttons">
                <Button onClick={() => {}}>
                  {i18n.t('aprovacao.aprovar')}
                </Button>
                <Button onClick={() => {}}>
                  {i18n.t('aprovacao.reprovar')}
                </Button>
              </Buttons>
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
                  {apontamentoslist != null && apontamentoslist.length != 0 ? 
                  apontamentoslist.map((apontamento) => { 
                    return (
                      <tr key={apontamento.id}>
                        <td>
                          <input type="checkbox" value={apontamento.id} onClick={() => 
                          handleSelected(apontamento.id, apontamento.horasTrabalhadas)}/>
                        </td>
                        <td>
                          {apontamento.data.substring(0,10)}
                        </td>
                        <td>
                          {apontamento.horasTrabalhadas}h
                        </td> 
                        <td>
                          <button onClick={() => handleOpenPopup(apontamento)}>
                            <GoChevronDown/>
                          </button>
                        </td>
                        {isOpen &&
                          <Descriptions open={!!isOpen}>
                            <header>
                              {i18n.t('aprovacao.descricao')}
                              <span/>
                            </header>
                            <div>
                              <p>
                                {description && description?.descricao}
                              </p>
                            </div>
                          </Descriptions>
                          }
                      </tr> 
                    )}) : <span>{i18n.t('aprovacao.default')}</span>}
                </tbody>
              </table>
            </Apontamentos>
            <ProgressBar>
              <div className="headers">
                <p>
                  {i18n.t('aprovacao.registroEfetuado')}
                </p>
                <p>
                  {i18n.t('aprovacao.aprovacaoFonecedor')}
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
                <Step isActive={isConfirmed} >
                  { !!isConfirmed ? <FiCheck/> : <VscChromeClose/> }
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
                <Step isActive={false}>
                  <VscChromeClose/>
                </Step>
              </div>
            </ProgressBar>
            <button form="aprovar" id="finalizar" type="submit">{i18n.t('aprovacao.finalizar')}</button>
          </Container>
          {showPopup && 
            <Consultores show={!!showPopup}>
              <div id="hold">
                <table>
                <thead>
                  <tr>
                    <td>
                      {i18n.t('tabelaConsultor.cadastro')}
                    </td>
                    <td>
                      {i18n.t('tabelaConsultor.nome')}
                    </td>
                    <td>
                      {i18n.t('consultorPopup.status')}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {consultants.map((consultant) => (
                    <Tr key={consultant.id} color={consultant.status}
                     onClick={() => handleSelectConsult(consultant.id)}>
                      <td>
                        {consultant.id}
                      </td>
                      <td>
                        {consultant.nome}
                      </td>
                      <td>
                        {consultant.status}
                      </td> 
                    </Tr>
                      ))}
                </tbody>
                </table>
                <button onClick={() => setShowPopup(!showPopup)}>
                  <BsX/>
                </button>
              </div>
            </Consultores>
    }
    </>
  )
}

export default Aprovacao;