import React from "react";
import { Popup, Table } from "./style"
import { GridColDef, GridRowsProp, GridCellParams, DataGrid} from '@material-ui/data-grid'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

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
const AprovacaoConsultores: React.FC = () => {
    const classes = useStyles();

    return (
        <Popup id="popup">
            <Table style={{ margin: '0',height: '100%', width: '100%'}} className={classes.root}>
                <DataGrid rows={rows} columns={columns} />
            </Table>
        </Popup>
    );
}

export default AprovacaoConsultores;