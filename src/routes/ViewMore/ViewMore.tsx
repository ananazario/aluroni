import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IApi from "../../shared/Types/IApi";
import Api from "../../shared/http/Api";
import { useCloseElement } from "../../shared/hooks/useCloseElement";
import './ViewMore.css';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ViewMore = () => {
    const [viewData, setViewData] = useState<IApi>()
    const dropdownData = useRef(null)
    const [isClosed, setIsClosed] = useCloseElement(false, dropdownData)

    const { id } = useParams();

    useEffect(() => {
        Api.get(`/users/${id}`)
            .then((response) => {
              setViewData(response.data)
            }
            )
    }, []);

    return (
      <div className="container">
        <Breadcrumbs />
        
        {viewData ? (
        <section>
          <Link 
            to={`/edition/${viewData.id}`}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold d-flex justify-content-end"
          >
            <button type="button" className="btn btn-primary mb-2">
              Editar
            </button>
          </Link> 

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                key={viewData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="">
                  Avatar
                </TableCell>
                <TableCell component="th" scope="row">
                  {viewData.avatar}
                </TableCell>
              </TableRow>

              <TableRow
                key={viewData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={`table ${isClosed ? 'active' : ''}`}
              >
                <TableCell component="th" scope="row">
                  Nome
                </TableCell>
                <TableCell align="left">
                  {viewData.name}
                  <Button variant="outlined" className="btn-viewmore" onClick={() => setIsClosed(!isClosed)}> {' > '} </Button>   
                <ul 
                  ref={dropdownData} 
                  className={`menu ${isClosed ? 'active' : ''}`}
                >
                  <li>
                    <tr>
                      <td>Created at</td>
                      <td>{viewData.createdAt}</td>
                    </tr>
                  </li>
                  <li>
                    <tr>
                      <td>CNPJ</td>
                      <td>{viewData.cnpj}</td>
                    </tr>
                  </li>
                </ul>
                </TableCell>
              </TableRow>

              <TableRow
                key={viewData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Created at
                </TableCell>
                <TableCell align="left">
                  {viewData.createdAt.slice(0, 10)}
                </TableCell>
              </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </section>
      ) : <h1>Carregando...</h1>}
    </div>
    );
};

export default ViewMore;
