import React, { useCallback, useRef } from "react";
import { GridColDef, GridRowsProp, DataGrid} from '@material-ui/data-grid'
import { Infos, Container, Count, Apontamentos, ProgressBar, Filters, Title } from "./style"
import { FiCheck } from 'react-icons/fi' 
import { VscChromeClose } from 'react-icons/vsc'
import FinishButton from "../../components/FinishButton";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input"
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web"

const Aprovacao: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);
    
    const handleSubmit = useCallback(async () => {
    },[]);
    const rowsap: GridRowsProp = [
        { id: 1, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 2, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 3, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 4, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 5, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 6, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 7, col1: '08/07', col2: '8H', col3: 'icon'},
        { id: 8, col1: '08/07', col2: '8H', col3: 'icon'},
      ];
      
      const columnsap: GridColDef[] = [
        { field: 'col1', headerName: "DATA", width: 100,type: "date", align:'center', headerAlign: 'center'},
        { field: 'col2', headerName: 'HORA', width: 100, type: "hour", align:'center', headerAlign: 'center'},
        { field: 'col3', headerName: 'DESCRIÇÃO',headerAlign: 'center', align: 'center', width: 100 },
      ];
      
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
                    <button>VISUALIZAR CONSULTORES</button>
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
                <Apontamentos style={{ margin: '0',height: '350px', width: '27vw'}}>
                    <DataGrid checkboxSelection={ true } hideFooter={ true } rows={rowsap} columns={columnsap} />
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
        </>
    )
}
export default Aprovacao;