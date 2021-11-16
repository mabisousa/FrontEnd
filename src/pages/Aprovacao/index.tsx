import React, { useCallback, useRef, useState, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

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

const Aprovacao: React.FC<tema> = ({alternarTema}) => {

  const formRef = useRef<FormHandles>(null);
  const [consultores, setConsultores] = useState<Consultor[]>([]);
  const [consultor, setConsultor] = useState<Consultor>();
  const [descricao, setDescricao] = useState<Apontamento>();
  const [popup, setEstadoPopup] = useState(false);
  const [popupDescricao, setPopupDescricao] = useState(false);
  const [apontamentoSelecionado, setApontamentoSelecionado] = useState(false)
  const [mostrarRequisicao, setMostrarRequisicao] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const [selecionados,setSelecionados] = useState<Selecionados[]>([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(()=> {
    api.get(`consultores`).then((response)=> {
      setConsultores(response.data);
    })
  })

  let valor = localStorage.getItem("@WEGusers:responsavel")
  let responsavel!: { idResponsavel: number; responsavelNome: string };

  if(valor) {
    responsavel = JSON.parse(valor);
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
    setEstadoPopup(false);
  },[setConsultor])

  const selecionarApontamento = useCallback(async (id: number, horas: number) => {
  
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
  },[aprovacao, consultor, responsavel.idResponsavel, selecionados])

  const mostrarPopupRequisicao = useCallback((state: boolean) => {
    setMostrarRequisicao(state)
  },[setMostrarRequisicao]);

  const filtrados = consultores.filter((consultor) => consultor.consultorNome.toLowerCase().includes(pesquisa.toLowerCase()));  
  
  let horasTotais = 0;
  let apontamentosconsultor = 0;
  let apontamentosaprovados = 0;
  let apontamentosreprovados = 0;
  let formatted, formatteddata: {} | null | undefined;

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
      {mostrarRequisicao && consultor && 
        <Requisicao selecionados={selecionados} responsavel={responsavel} 
          consultor={consultor} mostrarRequisicao={mostrarPopupRequisicao}/> 
      }
      <Perfil/>
      <Menu />
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
            <div className="informacao">
              <div className="segurando">
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
                      <input type="checkbox" value={apontamento.idApontamento} 
                        onClick={() => selecionarApontamento(apontamento.idApontamento, apontamento.horasTrabalhadas)}/>
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