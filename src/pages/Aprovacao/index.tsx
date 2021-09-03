import React, { useCallback, useRef } from "react";
import { Infos, Container, Count, Apontamentos, ProgressBar, Title, Consultores, Buttons, Button, Step, Description } from "./style"
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
import { openModal, closeModal } from "../../script/modal/script.js"
import { BsX } from "react-icons/bs";
import { checkbox, openDescription, openRequest } from "./script";
import { useState } from "react";

const Aprovacao: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
        const [isConfirmed, setConfirm] = useState(false);
        const [isOpened, setOpen] = useState(false);
        const [isSelected, setSelected] = useState(false);

    const handleSubmit = useCallback(async () => {
    },[]);
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
    }, [isConfirmed, setConfirm]);
    const handleOpen = useCallback(() => {
        if(!!isOpened === false) {
        setOpen(true);    
        } else {
            setOpen(false);    
        }

        openDescription(!!isOpened);

    }, [isOpened, setOpen]);

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
                            <div className="numbers"><p>50</p></div>
                            <p> APONTAMENTOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"><p>30</p></div>
                            <p> APROVADOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"><p>20</p></div>
                            <p> REPROVADOS</p>
                        </div>
                    </div>
                    
                    <button id="visualizar" onClick={openModal}>VISUALIZAR CONSULTORES</button>
                    <Buttons id="buttons">
                        <Button onClick={() => {openRequest("reprovar")}}>REPROVAR</Button>
                        <Button onClick={() => {openRequest("aprovar")}}>APROVAR</Button>
                    </Buttons>
                </Count>
                <Apontamentos>
                <Description Opened={!!isOpened} id="descricao">
                    <header><p>Descrição</p><span/></header>
                    <div>
                        <p>
                            *******************************
                            *******************************
                            *******************************
                            *******************************
                            *******************************
                            *******************************
                        </p>
                    </div>
                </Description>
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
                        <tr>
                            <td><input type="checkbox" id="carlos" onClick={handleSelected}/></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={handleOpen}><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(2)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(3)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(4)}}><GoChevronDown/></button></td>
                        </tr> 
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(5)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(6)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(7)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(8)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(9)}}><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button onClick={() => {openDescription(10)}}><GoChevronDown/></button></td>
                        </tr>
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
            <Consultores id="popup">
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
                <tr>
                    <td>67270</td>
                    <td>ISAC FREIRE BEZERRA</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>
                    <td>67271</td>
                    <td>JEAN HENRIQUE REIGUEL</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>
                    <td>67272</td>
                    <td>KETLHIN KATIA NARDELLI</td>
                    <td>INATIVO</td> 
                </tr>
                <tr>
                    <td>67273</td>
                    <td>MARCOS ANTÔNIO BOLIGON VARGAS</td>
                    <td>INATIVO</td> 
                </tr> 
                <tr>
                    <td>67274</td>
                    <td>MARIA GABRIELA DE SOUSA CRUZ</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>            
                    <td>67275</td>
                    <td>MILENE APARECIDA LIMA</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>            
                    <td>67275</td>
                    <td>MILENE APARECIDA LIMA</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>            
                    <td>67275</td>
                    <td>MILENE APARECIDA LIMA</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>            
                    <td>67275</td>
                    <td>MILENE APARECIDA LIMA</td>
                    <td>ATIVO</td> 
                </tr>
                <tr>            
                    <td>67275</td>
                    <td>MILENE APARECIDA LIMA</td>
                    <td>ATIVO</td> 
                </tr>
                </tbody>
                </table>
                <button onClick={closeModal}><BsX/></button>
            </div>
            </Consultores>
        </>
    )
}
export default Aprovacao;