import React, { useCallback, useRef, useState, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup"
import { Infos, Container, Conta, Apontamentos, BarraDeProgressao, Titulo, Consultores, 
    Passo, Descricoes, Tr, Info } from "./style";

import { VscChromeClose } from 'react-icons/vsc';
import { GoChevronDown } from 'react-icons/go';
import { FiCheck } from 'react-icons/fi';
import { BsX } from "react-icons/bs";

import Requisicao from "../../components/Requisicao";
import Perfil from "../../components/Perfil";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";

import api from "../../services/api";

import { i18n } from "../../translate/i18n";

import { format, parseISO } from "date-fns"
import Input from "../../components/Input";
import { toast, ToastContainer } from "react-toastify";

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
      apontamentos: [{
        idApontamento: number,
        horasTrabalhadas: number,
        apontamentoData: string,
        apontamentoDescricao: string,
        apontamentoSituacao: string
      }],
      horasTotais: number,
      horasTrabalhadas: number
    }
  ]
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

interface tema{
  alternarTema(): void
}
interface Responsavel {
    idResponsavel: number,
  fornecedor: {
    idFornecedor: number,
    fornecedorNome: string, 
  },
  responsavelNome: string,
}
const Aprovacao: React.FC<tema> = ({alternarTema}) => {

  const formRef = useRef<FormHandles>(null);
  const [consultores, setConsultores] = useState<Consultor[]>([]);
  const [consultor, setConsultor] = useState<Consultor>();
  const [responsavel, setResponsavel] = useState<Responsavel>();
  const [descricao, setDescricao] = useState<Apontamento>();
  const [popup, setEstadoPopup] = useState(false);
  const [popupDescricao, setPopupDescricao] = useState(false);
  const [apontamentoSelecionado, setApontamentoSelecionado] = useState(false)
  const [mostrarRequisicao, setMostrarRequisicao] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const [selecionados,setSelecionados] = useState<Selecionados[]>([]);
  const [pesquisa, setPesquisa] = useState('');

  let infos = localStorage.getItem("@WEGusers:usuario")
  let resp!: { email: string; };
  
  if(infos) {
     resp = JSON.parse(infos);
  }
  
  useEffect(()=> {
    api.get(`consultores`).then((response)=> {
      setConsultores(response.data);
    })
  })
  useEffect(()=> {
    api.get(`responsaveis/${resp.email}`).then((response)=> {
      setResponsavel(response.data);
    })
  },[resp.email])
  

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
    setEstadoPopup(false);
  },[setConsultor])

  const selecionarApontamento = useCallback(async (id: number) => {
  
    if(selecionados.find(selecionado => selecionado.idApontamento  === id)) {
      setSelecionados(selecionados.filter(apontamento => apontamento.idApontamento !== id))
      setApontamentoSelecionado(false);
    } else {
      selecionados.push({idApontamento: id})
      setSelecionados(selecionados)
      setApontamentoSelecionado(true);
    }
  },[selecionados])

  const exibirDescricao = useCallback((apontamento: Apontamento) => {
    if(!descricao) {
      setPopupDescricao(!popupDescricao)
    }
    if(apontamento === descricao) {
      setPopupDescricao(!popupDescricao)
    } 
    setDescricao(apontamento)
  },[descricao, popupDescricao])

  let alocacoesfiltradas = consultor?.consultorAlocacoes
      .map(alocacao => alocacao.apontamentos.filter(apontamento => apontamento.apontamentoSituacao === "ESPERA"))
  
  const enviarAprovacao = useCallback(async () => {
    
    if(consultor && responsavel) {

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        idConsultor: Yup.number().required("Consultor obrigatório").positive(),
        consultorNome: Yup.number().required("Responsável obrigatório").positive(),
        idResponsavel: Yup.number().required("Responsável obrigatório").positive(),
        responsavelNome: Yup.number().required("Responsável obrigatório").positive(),
      }

      )
      try {
        aprovacao.consultor.idConsultor = consultor.idConsultor;
        aprovacao.valorHora = consultor.consultorValorHora;
        aprovacao.responsavel.idResponsavel = responsavel.idResponsavel;
        if(selecionados.length > 0) {
          aprovacao.apontamentos = selecionados;
        } else {
          toast.error("Selecione apontamentos para aprovar." , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          return
        }
        console.log(selecionados)
        api.post(`aprovacoes/inserir`,aprovacao).then(() => {
          api.get(`consultores/${consultor.idConsultor}`).then((response)=> {
            setConsultor(response.data);
            setFinalizado(true);
          })
          toast.success("Aprovação enviada com sucesso.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
       
      } catch(e) {

        toast.error("Erro ao enviar aprovação." , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  },[aprovacao, consultor, responsavel, selecionados])

  const mostrarPopupRequisicao = useCallback((state: boolean) => {
    setMostrarRequisicao(state)
  },[setMostrarRequisicao]);

  const filtrados = consultores.filter((consultor) => consultor.consultorNome.toLowerCase().includes(pesquisa.toLowerCase()));  
  
  let apontamentosconsultor = 0;
  let apontamentosaprovados = 0;
  let apontamentosreprovados = 0;

  consultor?.consultorAlocacoes.map(alocacao => {
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
      {mostrarRequisicao && consultor && responsavel &&
        <Requisicao selecionados={selecionados} responsavel={responsavel} 
          consultor={consultor} mostrarRequisicao={mostrarPopupRequisicao}/> 
      }
      <Perfil/>
      <Menu />
      <ToastContainer/>
      <Cabecalho alternarTema={alternarTema}>
        <p>
          {i18n.t('aprovacao.titulo')}
        </p>
      </Cabecalho>
      <Titulo>
        {i18n.t('aprovacao.titulo')}
      </Titulo>
      <Container>
        <Infos>
          <Form ref={formRef} id="aprovar" onSubmit={ enviarAprovacao }>
            <h1>
              {i18n.t('aprovacao.consultorInfo')}
            </h1>
            <div className="informacao">
              <div className="segurando">
                <Input value={consultor && consultor.idConsultor} name={"idConsultor"}></Input>
                <Input value={consultor && consultor.consultorNome} name={"consultorNome"}></Input>
              </div>
            </div>
            <h1>
              {i18n.t('aprovacao.aprovacaoInfo')}
            </h1>
            <div className="informacao">
              <div className="segurando">
                  <Input value={responsavel ? responsavel.idResponsavel : "ID"} name={"idResponsavel"}></Input>
                  <Input value={responsavel ? responsavel.responsavelNome :  "nome"} name={"responsavelNome"}></Input>
              </div>
            </div>
          </Form>
        </Infos>
        <Conta>
          <h1> {i18n.t('aprovacao.aprovacoes')}</h1>
          <div>
            <div className="segura">
              <div className="numeros">
                <p>
                  {apontamentosconsultor}
                </p>
              </div>
              <p>
                {i18n.t('aprovacao.apontamentos')}
              </p>
            </div>
            <div className="segura">
              <div className="numeros">
                <p>
                  {apontamentosaprovados}
                </p>
              </div>
              <p>
                {i18n.t('aprovacao.aprovado')}
              </p>
            </div>
            <div className="segura">
              <div className="numeros">
                <p>
                  {apontamentosreprovados}
                </p>
              </div>
              <p>
                {i18n.t('aprovacao.reprovado')}
              </p>
            </div>
          </div>
          <button onClick={() => setEstadoPopup(true) }>
              {i18n.t('aprovacao.consultor')}
          </button>
        </Conta>
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
                      <input type="checkbox" value={apontamento.idApontamento} onClick={() => selecionarApontamento(apontamento.idApontamento)}/>
                    </td>
                    <td>
                      {format(parseISO(apontamento.apontamentoData), "dd'/'MM'/'yyyy")}
                    </td>
                    <td>
                      {apontamento.horasTrabalhadas}
                    </td> 
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
                )
              )}   
            </tbody>
          </table>
        </Apontamentos>
        <BarraDeProgressao>
          <div className="cabecalhos">
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
          <div className="passos">
            <Passo ativo={true}>
              <FiCheck/>
            </Passo>
            <Passo ativo={!!finalizado} >
              { !!finalizado ? <FiCheck/> : <VscChromeClose/> }
            </Passo>
            <Passo ativo={false}>
              <VscChromeClose/>
            </Passo>
            <Passo ativo={false}>
              <VscChromeClose/>
            </Passo>
          </div>
        </BarraDeProgressao>
        {!!apontamentoSelecionado &&
          <button className="botoes" id="reprovar" onClick={() => setMostrarRequisicao(!mostrarRequisicao)}>
            {i18n.t('aprovacao.reprovar')}
          </button>
        }
        <button form="aprovar" className="botoes" type="submit">{i18n.t('aprovacao.finalizar')}</button>
      </Container>
      {popup &&
        <Consultores mostrar={popup}>
          <div id="segura">
            <div id="header">
              <div id="filtro">
                <label>
                  {i18n.t('consultores.nome')}
                </label>
                <input type="text" placeholder={i18n.t('consultores.placeHolder')} 
                  value={pesquisa} onChange={(ev) => setPesquisa(ev.target.value)}/>
              </div>
              <button onClick={() => setEstadoPopup(false)}>
                <BsX/>
              </button>
            </div>
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
                {filtrados.map(consultor => 
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
          </div>
        </Consultores>
      }
    </>
  )
}

export default Aprovacao;