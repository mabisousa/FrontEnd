import React, { useCallback, useRef } from "react";
import { Infos, Container, Count, Apontamentos, ProgressBar, Filters, Title, Consultores, } from "./style"
import { FiCheck } from 'react-icons/fi' 
import { VscChromeClose } from 'react-icons/vsc'
import { GoChevronDown } from 'react-icons/go'
import FinishButton from "../../components/FinishButton";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input"
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web"
import { openModal } from "../../script/modal/script.js"

const Aprovacao: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const handleSubmit = useCallback(async () => {
    },[]);
      
    return (
        <>
            <Profile/>
            <Menu />
            <Header>
                <p>APROVAÇÃO</p>
            </Header>
            <Filters>
                <Title>APROVAÇÃO</Title>
            </Filters>
            <Container>
                <Infos>
                    <Form ref={ formRef} onSubmit={ handleSubmit }>
                        <h1>INFORMAÇÕES DO CONSULTOR</h1>
                        <div className="inputs">
                            <Input name="cadastro" type="text">Cadastro</Input>
                            <Input name="nome" type="text">Nome</Input>
                        </div>
                        <div>
                            <h1>INFORMAÇÕES DA APROVAÇÃO</h1>
                            <div className="inputs">
                                <Input name="data" type="text">00/00/00</Input>
                                <Input name="responsavel" type="text">Responsável</Input>
                            </div>
                        </div>
                        <h1>VALORES APROVADOS</h1>
                        <div className="inputs">
                            <Input name="valorhora" type="text">R$ 00,00</Input>
                            <Input name="horas" type="text">00h</Input>
                        </div>
                    </Form>
                </Infos>
                <Count>
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
                    <button onClick={openModal}>VISUALIZAR CONSULTORES</button>
                    <div id="description">
                        <h1>Descrição</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo
                            luptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu
                            pidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
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
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr> 
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                        <tr>            
                            <td><input type="checkbox" /></td>
                            <td>11/08</td>
                            <td>4h</td> 
                            <td><button><GoChevronDown/></button></td>
                        </tr>
                    </tbody>
                    </table>
                </Apontamentos>
                <ProgressBar>
                    <div className="headers">
                        <p>Registro Efetuado</p>
                        <p>Aprovação Gestor</p>
                        <p>Aprovação Fornecedor</p>
                        <p>Requisição de compra</p>
                    </div>
                    <div className="steps">
                        <div id="1" className="step active">
                            <FiCheck/>
                        </div>
                        <div id="2" className="step active">
                            <FiCheck/>
                        </div>
                        <div id="3" className="step">
                            <FiCheck/>
                        </div>
                        <div id="4" className="step">
                            <VscChromeClose/>
                        </div>
                    </div>
                </ProgressBar>
                <FinishButton>FINALIZAR</FinishButton>
            </Container>

            <Consultores id="popup">
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
            </Consultores>
        </>
    )
}
export default Aprovacao;