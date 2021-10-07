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
    
    const [consultores, setConsultores] = useState<Consultor[]>([]);
    const [consultor,setConsultor] = useState<Consultor>();
    const formRef = useRef<FormHandles>(null);
    const [isConfirmed, setConfirm] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [descricao, setDescricao] = useState<Apontamento>();
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
            setConsultor(response.data);
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
            setDescricao(apontamentos[index]);

            if(apontamento.id === descricao?.id) {
                setOpen(!isOpen);
            }
 
    }, [apontamentos, isOpen, setOpen, descricao, setDescricao]);

    useEffect(() => {
        api.get("/consultores").then((response) => {
        setConsultores(response.data)
        })
        api.get("/apontamentos").then((response) => {
            setApontamentos(response.data)
        })
    }, []);

    const apontamentosaprovados = apontamentos.filter(apontamento => apontamento.situacaoApontamento === "APROVADO")
    ,aprovados = apontamentosaprovados.length;

    const apontamentosreprovados = apontamentos.filter(apontamento => apontamento.situacaoApontamento === "REPROVADO")
    ,reprovados = apontamentosreprovados.length;

    const apontamentoslist = consultor?.apontamentos.filter(apontamento => apontamento.situacaoApontamento === "ESPERA");
    console.log(apontamentoslist)
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
                <Form ref={formRef} id="aprovar" onSubmit={ handleAprove }>
                        <h1>INFORMAÇÕES DA APROVACAO</h1>
                        <div>
                            <p>NOME SADSADASDSAD</p>
                            <div>
                                <Info>{consultor ? consultor.nome : "a"}</Info>
                                <Info>{horasSelecionadas ? horasSelecionadas : 0}</Info>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <p>INFOS</p>
                            <div>
                                <Info>{consultor ? consultor.limiteHoras : 0}</Info>
                                <Info>{consultor ? consultor.valorHoras : 0}</Info>
                            </div>
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
                        <Button onClick={() => {}}>REPROVAR</Button>
                        <Button onClick={() => {}}>APROVAR</Button>
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
                        {apontamentoslist != null && apontamentoslist.length != 0 ? apontamentoslist.map((apontamento) => { 
                        return (
                            <tr key={apontamento.id}>
                                <td><input type="checkbox" value={apontamento.id} onClick={() => handleSelected(apontamento.id)}/></td>
                                <td>{apontamento.data.substring(0,10)}</td>
                                <td>{apontamento.horasTrabalhadas}h</td> 
                                <td><button onClick={() => handleOpenPopup(apontamento)}><GoChevronDown/></button></td>
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
                            
                        )}) : <span>Não há apontamentos para aprovar.</span>}
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
                <button form="aprovar" id="finalizar" type="submit">FINALIZAR</button>
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
                        <Tr key={consultor.id} color={consultor.status} onClick={() => handleSelectConsult(consultor.id)}>
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