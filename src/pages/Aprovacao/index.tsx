import React, { useCallback, useRef, useState, useEffect } from "react";
import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, Buttons, Button, Step, Descriptions } from "./style"
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

interface Consultor{
    id: number;
    nome: string;
    status: string
    skill: string;
}

interface Apontamento {
    id:number,
    data: Date,
    horasTrabalhadas: number,
    descricao: string,
    situacaoApontamento: string,
    projeto: {
        id: number,
    }
}

const Aprovacao: React.FC = () => {
    
    const [consultores, setConsultor] = useState<Consultor[]>([]);
    const formRef = useRef<FormHandles>(null);
    const [isConfirmed, setConfirm] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isSelected, setSelected] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [a, setApontamento] = useState<Apontamento[]>([]);

    const handleSubmit = useCallback(async () => {},[]);

    const handleSelected = useCallback(async () => {
        console.log(isSelected)
        if(!!isSelected === false) {
            setSelected(true);    
            } else {
                setSelected(false);    
            }
            checkbox(isSelected);
    },[isSelected, setSelected]);

    const handleActive = useCallback(() => {
        setConfirm(true);
    }, [setConfirm]);
    
    const handleOpen = useCallback((id) => {
        if(!!isOpen === false) {
        setOpen(true);    
        } else {
            setOpen(false);    
        }

        setApontamento(apontamentos.filter(apontamento => apontamento.id === id));
        
    }, [isOpen, setOpen]);

    useEffect(() => {
        api.get("/consultores").then((response) => {
        setConsultor(response.data)
        })
    }, []);

    const [apontamentos, setApontamentos] = useState<Apontamento[]>([]);

    useEffect(() => {
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
                    <Form ref={ formRef} onSubmit={ handleSubmit }>
                        <h1>INFORMAÇÕES DO CONSULTOR</h1>
                        <div className="inputs">
                            <Input name="cadastro" type="text" placeholder=" ">Cadastro</Input>
                            <Input name="nome" type="text" placeholder=" ">Nome</Input>
                        </div>
                        <div>
                            <h1>INFORMAÇÕES DA APROVAÇÃO</h1>
                            <div className="inputs">
                                <Input name="data" type="text" placeholder=" ">00/00/00</Input>
                                <Input name="responsavel" type="text" placeholder=" ">Responsável</Input>
                            </div>
                        </div>
                        <h1>VALORES APROVADOS</h1>
                        <div className="inputs">
                            <Input name="valorhora" type="text" placeholder=" ">R$ 00,00</Input>
                            <Input name="horas" type="text" placeholder=" ">00h</Input>
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
                                <td><input type="checkbox" value={apontamento.id} onClick={handleSelected}/></td>
                                <td>{apontamento.data}</td>
                                <td>{apontamento.horasTrabalhadas}h</td> 
                                <td><button onClick={() => handleOpen(apontamento.id)}><GoChevronDown/></button></td>

                                <Descriptions Open={!!isOpen}>
                                    <header><p>Descrição</p><span/></header>
                                    <div>
                                        <p>
                                        {a && a.map(as => as.descricao)}
                                        </p>
                                    </div>
                                </Descriptions>
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
                <FinishButton onClick={handleActive}>FINALIZAR</FinishButton>
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
                        <tr>
                            <td>{consultor.id}</td>
                            <td>{consultor.nome}</td>
                            <td>{consultor.status}</td> 
                        </tr>
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