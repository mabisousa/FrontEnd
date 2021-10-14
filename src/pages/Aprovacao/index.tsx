import React, { useCallback, useRef, useState, useEffect } from "react";
import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, Buttons, 
    Button, Step, Descriptions, Tr, Info } from "./style"
import { FiCheck } from 'react-icons/fi' 
import { VscChromeClose } from 'react-icons/vsc'
import { GoChevronDown } from 'react-icons/go'
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Request from "../../components/Request";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web"
import { BsX } from "react-icons/bs";
import api from "../../services/api";
import { format } from "date-fns";
import { i18n } from "../../translate/i18n";

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

  let horasSelecionadas = 0;

  const aprovacao = {
    data: new Date(),  
    nomeFornecedor: "teste",
    nomeResponsavel: "teste",
    idConsultor: 1,
    horasAprovadas: 20,
    valorHora: 1.5,
    apontamentos: [
      {
        id: 1,
      },
      {
        id: 2,
      }
    ]
  }

  const handleSelectConsult = useCallback((id) => {

    api.get(`consultores/${id}`).then((response) => {
      setConsultant(response.data);
      console.log(response.data)
    })
    setShowPopup(false);
  },[]);

  const handleAprove = useCallback(async () => {
    try {
      formRef.current?.setErrors({});
      await api.post("aprovacao/inserir", aprovacao);
      console.log(aprovacao)

    } catch(e) {
      console.log(e);
    }
  },[aprovacao]);

  const handleSelected = useCallback(async (id) => {
    let alreadySelected;
    let indexSelected = 0;

    aprovacao.apontamentos.map(apontamento => {
      if(apontamento.id === id) {
        alreadySelected = true;
        indexSelected = aprovacao.apontamentos.indexOf(apontamento,0);
      }
    })

    if(alreadySelected === true) {
      aprovacao.apontamentos.splice(indexSelected);
    } else {
      aprovacao.apontamentos.push({id: id});
    }
  },[aprovacao]);

  const handleOpenPopup = useCallback((apontamento) => {
    console.log(apontamento)
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


    const apontamentoslist = consultant?.apontamentos.filter(apontamento => apontamento.situacaoApontamento === "ESPERA");
    console.log(apontamentoslist)

    let date = new Date();
    const formattedDate = format(date, "dd'/'MM'/'yyyy");

    console.log(formattedDate)
    return (
        <>
          <Profile/>
          <Menu />
          <Request/>
          <Header>
            <p>APROVAÇÃO</p>
          </Header>
          <Title>{i18n.t('approval.titlePage')}</Title>
          <Container>
            <Infos>
              <Form ref={formRef} id="aprovar" onSubmit={ handleAprove }>
                <h1>{i18n.t('approval.consultantInfo')}</h1>
                <div className="information">
                  <div className="holding">
                    <Info>{consultant ? consultant.id : "Cadastro"}</Info>
                    <Info>{consultant ? consultant.nome : "Nome"}</Info>
                  </div>
                </div>
                <h1>{i18n.t('approval.approvalInfor')}</h1>
                <div className="information">
                  <div className="holding">
                    <Info>{consultant ? formattedDate: "Data"}</Info>
                    <Info>{consultant ? "Responsável" : "Responsável"}</Info>
                  </div>
                  <div className="holding">
                    <p>{i18n.t('approval.totalHours')}</p>
                    <Info>{consultant ? consultant.limiteHoras + "h /" + consultant.limiteHoras +"h" : "00h"}</Info>
                    <p>{i18n.t('approval.hourlyRate')}</p>
                    <Info>{consultant ? "R$ " + consultant.valorHoras  : "R$ 00,00"}</Info>
                  </div>
                </div>
              </Form>
            </Infos>
            <Count id="count">
              <h1> {i18n.t('approval.approvals')}</h1>
              <div>
                <div className="hold">
                  <div className="numbers"><p>{apontamentos.length}</p></div>
                  <p>{i18n.t('approval.appointments')}</p>
                </div>
                <div className="hold">
                  <div className="numbers"><p>{aprovados}</p></div>
                  <p>{i18n.t('approval.approved')}</p>
                </div>
                <div className="hold">
                  <div className="numbers"><p>{reprovados}</p></div>
                  <p>{i18n.t('approval.disapprove')}</p>
                </div>
              </div>
              <button id="visualizar" onClick={() => setShowPopup(!showPopup)}>VISUALIZAR CONSULTORES</button>
              <Buttons id="buttons">
                <Button onClick={() => {}}>{i18n.t('approval.buttonapproved')}</Button>
                <Button onClick={() => {}}>{i18n.t('approval.buttonDisapprove')}</Button>
              </Buttons>
            </Count>
            <Apontamentos>
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>{i18n.t('approval.date')}</td>
                    <td>{i18n.t('approval.hour')}</td>
                    <td>{i18n.t('approval.info')}</td>
                  </tr>
                </thead>
                <tbody>
                  {apontamentoslist != null && apontamentoslist.length != 0 ? apontamentoslist.map((apontamento) => { 
                    return (
                      <tr key={apontamento.id}>
                        <td><input type="checkbox" value={apontamento.id} onClick={() => handleSelected(apontamento.id)}/></td>
                        <td>{apontamento.data.substring(0,10)}</td>
                        <td>{apontamento.horasTrabalhadas}h</td> 
                        <td><button onClick={() => handleOpenPopup(apontamento)}><GoChevronDown/></button></td>
                        {isOpen &&
                          <Descriptions open={!!isOpen}>
                            <header>{i18n.t('approval.description')}<span/></header>
                            <div>
                              <p>
                                {description && description?.descricao}
                              </p>
                            </div>
                          </Descriptions>
                          }
                      </tr> 
                    )}) : <span>{i18n.t('approval.default')}</span>}
                </tbody>
              </table>
            </Apontamentos>
            <ProgressBar>
              <div className="headers">
                <p>{i18n.t('approval.registration')}</p>
                <p>{i18n.t('approval.supplierApproval')}</p>
                <p>{i18n.t('approval.managerApproval')}</p>
                <p>{i18n.t('approval.requisition')}</p>
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
            <button form="aprovar" id="finalizar" type="submit">{i18n.t('approval.finish')}</button>
          </Container>
          {showPopup && 
            <Consultores show={!!showPopup}>
              <div id="hold">
                <table>
                <thead>
                  <tr>
                    <td>CADASTRO</td>
                    <td>NOME</td>
                    <td>STATUS</td>
                  </tr>
                </thead>
                <tbody>
                  {consultants.map((consultant) => (
                    <Tr key={consultant.id} color={consultant.status} onClick={() => handleSelectConsult(consultant.id)}>
                      <td>{consultant.id}</td>
                      <td>{consultant.nome}</td>
                      <td>{consultant.status}</td> 
                    </Tr>
                      ))}
                </tbody>
                </table>
                <button onClick={() => setShowPopup(!showPopup)}><BsX/></button>
              </div>
            </Consultores>
    }
    </>
  )
}

export default Aprovacao;