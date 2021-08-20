import React from "react";
import { makeStyles } from '@material-ui/styles'
import clsx from "clsx";
import { GridColDef, GridRowsProp, GridCellParams, DataGrid} from '@material-ui/data-grid'
import { Infos, Container, Count, Apontamentos, ProgressBar, Popup, Table, Filters, Title } from "./style"
import { FiCheck } from 'react-icons/fi' 
import { VscChromeClose } from 'react-icons/vsc'
import FinishButton from "../../components/FinishButton";
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const rows: GridRowsProp = [
    { id: 1, col1: '67270', col2: 'ISAC FREIRE BEZERRA', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 2, col1: '67271', col2: 'JEAN HENRIQUE REIGUEL', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 3, col1: '67272', col2: 'KETLHIN KATIA NARDELLI', col3: 'INATIVO', col4: '2', col5: '+' },
    { id: 4, col1: '67273', col2: 'MARCOS ANTÔNIO BOLIGON VARGAS', col3: 'INATIVO', col4: '2', col5: '+' },
    { id: 5, col1: '67274', col2: 'MARIA GABRIELA DE SOUSA CRUZ', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 6, col1: '67275', col2: 'MILENE APARECIDA LIMA', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 7, col1: '67276', col2: 'ROBERT ARON ZIMMERMANN', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 8, col1: '67277', col2: 'ROBERTA LUIZA BASEGGIO POLEZ', col3: 'ATIVO', col4: '2', col5: '+' },
    { id: 9, col1: '67278', col2: 'TAILON SANTA CLARA NECKE', col3: 'ATIVO', col4: '2', col5: '+' },
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'CADASTRO', width: 150, type: "number", align:'center', headerAlign: 'center'},
    { field: 'col2', headerName: 'NOME', width: 400, },
    { field: 'col3', headerName: 'STATUS', headerAlign: 'center', align: 'center', width: 150,
    cellClassName: (params: GridCellParams) =>
    clsx('super-app', {
      negative: (params.value as string) === 'INATIVO',
    }), },
    { field: 'col4', headerName: 'PROJETOS', headerAlign: 'center', align: 'center',  width: 120, type: "number",},
    { field: 'col5', headerName: 'DETALHES', headerAlign: 'center', align: 'center', width: 120, },
  ];
  const step = document.getElementById("3");
  const useStyles = makeStyles({
    root: {
      '& .super-app.negative': {
        color: '#AC341A',
      }},
      'header':{
        backgroundColor: '#0075B1',
      }
    },
  );

const Aprovacao: React.FC = () => {
    

    function descriptappear() {
        var descript = document.getElementById("desc1");
        descript?.classList.add("active");
        console.log(descript);
    }
    function openTable() {
        var popup = document.getElementById("popup");
    }
    
    const classes = useStyles();
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
        <Popup id="popup">
            <Table style={{ margin: '0',height: '100%', width: '100%'}} className={classes.root}>
                <DataGrid rows={rows} columns={columns} />
            </Table>
        </Popup>
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
                        <div>
                        <h1>INFORMAÇÕES DO CONSULTOR</h1>
                        <div className="inputs">
                            <input type="text" placeholder="Cadastro" />
                            <input type="text" placeholder="Nome" />
                        </div>
                        </div>
                    <div>
                        <h1>INFORMAÇÕES DA APROVAÇÃO</h1>
                        <div className="inputs">
                            <input type="text" placeholder="00/00/00" />
                            <input type="text" placeholder="Responsável" />
                        </div>
                    </div>
                    <div>
                        <h1>VALORES APROVADOS</h1>
                        <div className="inputs">
                            <input type="text" placeholder="R$ 00,00" />
                            <input type="text" placeholder="00h" />
                        </div>
                    </div>
                </Infos>
                <Count>
                    <h1>APROVAÇÕES</h1>
                    <div>
                        <div className="hold">
                            <div className="numbers"> <p>50</p></div>
                            <p> APONTAMENTOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"> <p>30</p></div>
                            <p> APROVADOS</p>
                        </div>
                        <div className="hold">
                            <div className="numbers"> <p>20</p></div>
                            <p> REPROVADOS</p>
                        </div>
                    </div>
                    <button onClick={openTable}>VISUALIZAR CONSULTORES</button>
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