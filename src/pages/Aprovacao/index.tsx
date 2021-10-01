import React, { useCallback, useRef, useState, useEffect } from "react";
import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, Buttons, 
    Button, Step, Descriptions, Tr } from "./style"
import { FiCheck } from 'react-icons/fi' 
import { VscChromeClose } from 'react-icons/vsc'
import { GoChevronDown } from 'react-icons/go'
import FinishButton from "../../components/FinishButton";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input"
import Request from "../../components/Request";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web"
import { BsX } from "react-icons/bs";
import { checkbox, openRequest } from "./script";
import api from "../../services/api";
import { number } from "yup";

interface Consultor{
    id: number;
    nome: string;
    status: string
    skill: string;
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
    
    const [consultores, setConsultor] = useState<Consultor[]>([]);
    const formRef = useRef<FormHandles>(null);
    const [isConfirmed, setConfirm] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [descricao, setDescricao] = useState<Apontamento>();
    const [apontamentos, setApontamentos] = useState<Apontamento[]>([]);

    const aprovacao = {
        data:  new Date("2019-01-16"),  
        nomeFornecedor: "",
        nomeResponsavel: "",
        idConsultor: 0,
        horasAprovadas: 0,
        valorHora: 0,
        apontamentos: [
            {
                id: 0
            }
        ]
    }

    const aprovar = useCallback(async (dados: Aprovacao) => {
        try {
            formRef.current?.setErrors({});

            aprovacao.data = dados.data;
            aprovacao.nomeFornecedor = dados.nomeFornecedor;
            aprovacao.nomeResponsavel = dados.nomeResponsavel;
            aprovacao.idConsultor = dados.idConsultor;
            aprovacao.horasAprovadas = dados.horasAprovadas;
            aprovacao.valorHora = dados.valorHora;

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

        aprovacao.apontamentos = aprovacao.apontamentos.filter(apontamento => apontamento.id !== 0);

    },[aprovacao]);

    const handleActive = useCallback(() => {
        setConfirm(true);
    }, [setConfirm]);
    
    const handleOpen = useCallback((apontamento) => {
    
            let index = apontamentos.indexOf(apontamento);
            setDescricao(apontamentos[index]);

            if(apontamento.id === descricao?.id) {
                setOpen(!isOpen);
            }
 
    }, [apontamentos, isOpen, setOpen, descricao, setDescricao]);

    useEffect(() => {
        api.get("/consultores").then((response) => {
        setConsultor(response.data)
        })
        api.get("/apontamentos").then((response) => {
            setApontamentos(response.data)
        })
    }, []);
    const apontamentosaprovados = apontamentos.filter(apontamento => apontamento.situacaoApontamento === "APROVADO")
    ,aprovados = apontamentosaprovados.length;

    const apontamentosreprovados = apontamentos.filter(apontamento => apontamento.situacaoApontamento === "REPROVADO")
    ,reprovados = apontamentosreprovados.length;
    return (
        <>
            <Profile/>
            <Menu />
            <Request/>
            
            <Header>
                <p>APROVAÇÃO</p>
            </Header>
            <Title>APROVAÇÃO</Title>
            <Container>
                <Infos>
                <Form ref={ formRef} id="aprovar" onSubmit={ aprovar }>
                        <h1>INFORMAÇÕES DO CONSULTOR</h1>
                        <div className="inputs">
                            <Input name="idConsultor" type="number" placeholder=" ">Cadastro</Input>
                            <Input name="nomeConsultor" type="text" placeholder=" ">Nome</Input>
                        </div>
                        <div>
                            <h1>INFORMAÇÕES DA APROVAÇÃO</h1>
                            <div className="inputs">
                                <Input name="data" type="date" placeholder=" ">00/00/00</Input>
                                <Input name="nomeResponsavel" type="text" placeholder=" ">Responsável</Input>
                            </div>
                        </div>
                        <h1>VALORES APROVADOS</h1>
                        <div className="inputs">
                            <Input name="valorHora" type="number" placeholder=" ">R$ 00,00</Input>
                            <Input name="horasAprovadas" type="number" placeholder=" ">00h</Input>
                        </div>
                    </Form>
                </Infos>
                <Count id="count">
                    <h1>APROVAÇÕES</h1>
                    <div>
                        <div className="hold">
                            <div className="numbers"><p>{apontamentos.length}</p></div>
                            <p> APONTAMENTOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"><p>{aprovados}</p></div>
                            <p> APROVADOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"><p>{reprovados}</p></div>
                            <p> REPROVADOS</p>
                        </div>
                    </div>
                    
                    <button id="visualizar" onClick={() => setShowPopup(!showPopup)}>VISUALIZAR CONSULTORES</button>
                    <Buttons id="buttons">
                        <Button onClick={() => {openRequest("reprovar")}}>REPROVAR</Button>
                        <Button onClick={() => {openRequest("aprovar")}}>APROVAR</Button>
                    </Buttons>
                </Count>
                <Apontamentos>
                    <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>DATA</td>
                            <td>HORA</td>
                            <td>INFO</td>
                        </tr>
                    </thead>
                    <tbody>
                        {apontamentos.map((apontamento) => { 
                        return (
                            
                            <tr key={apontamento.id}>
                                <td><input type="checkbox" value={apontamento.id} onClick={() => handleSelected(apontamento.id)}/></td>
                                <td>{apontamento.data.substring(0,10)}</td>
                                <td>{apontamento.horasTrabalhadas}h</td> 
                                <td><button onClick={() => handleOpen(apontamento)}><GoChevronDown/></button></td>
                                {isOpen &&
                                    <Descriptions Open={!!isOpen}>
                                    <header>Descrição<span/></header>
                                    <div>
                                        <p>
                                            {descricao && descricao?.descricao}
                                        </p>
                                    </div>
                                </Descriptions>
                                }
                                
                            </tr>
                            
                        )})}
                    </tbody>
                    </table>
                </Apontamentos>
                <ProgressBar>
                    <div className="headers">
                        <p>Registro Efetuado</p>
                        <p>Aprovação Fornecedor</p>
                        <p>Aprovação Gestor</p>
                        <p>Requisição de compra</p>
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
                <button form="aprovar" type="submit">FINALIZAR</button>
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
                    {consultores.map((consultor) => (
                        <Tr color={consultor.status}>
                            <td>{consultor.id}</td>
                            <td>{consultor.nome}</td>
                            <td>{consultor.status}</td> 
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