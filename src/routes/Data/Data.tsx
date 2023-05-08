import { useEffect, useState } from 'react';
import styles from './Data.module.css';
import { Link } from 'react-router-dom';
import IApi from '../../shared/Types/IApi';
import { Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Api from '../../shared/http/Api';

const Data = () => {

    const [carregando, setCarregando] = useState<boolean>(false)
    const [initialData, setInitialData] = useState([])
    const [dados, setDados] = useState<IApi[]>([])
    const [search, setSearch] = useState<string>("")
    const [error, setError] = useState<string>('')

    const getData = () => {
        setCarregando(true)
        Api.get('/users')
        .then((response) => {
            setCarregando(false)
            setInitialData(response.data)
            setDados(response.data)
        }).catch(() => {
            setError('Algo deu errado em carregar os dados da API')
        })
    }

    const deleteData = (deletePerson : IApi) => {
        Api.delete(`/users/${deletePerson.id}`)
            .then(() => {
                let newList = dados.filter((person) => person.id !== deletePerson.id)
                setDados([...newList])
            }).catch(() => {
                setError('Ocorreu um erro. Por favor, tente novamente')
            })
    }
    
    const filterSearch = () => {
        let valueInput = search.toLowerCase()
        const filtroDados = dados.filter(({name}) => name.toLowerCase().includes(valueInput))

        if (valueInput == '') {
            setDados(initialData)
            return
        } else {
            setDados(filtroDados)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        filterSearch()
        console.log(dados)
    }, [search])

    return (
        <section className={styles.homeData}>
            <Input 
                type="search" 
                value={search} 
                onChange={({target}) => setSearch(target.value)} 
                className={styles.input}
            />
            <button type="button" onClick={filterSearch} className="btn btn-primary btn-lg">
                Search
            </button>
            
            <div className={styles.dados}>
                {carregando ? <h1>Carregando...</h1> : (
                    <TableContainer component={Paper} className={styles.tableData}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Avatar</TableCell>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Created at</TableCell>
                          <TableCell align="left">Ler mais</TableCell>
                          <TableCell align="left">Editar</TableCell>
                          <TableCell align="left">Excluir</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dados.map((dado) => (
                          <TableRow
                            key={dado.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {dado.avatar}
                            </TableCell>
                            <TableCell align="left">{dado.name}</TableCell>
                            <TableCell align="left">{dado.createdAt.slice(0, 10)}</TableCell>
                            <TableCell align="left">
                                [ <Link to={`/read/${dado.id}`} className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold">Ler mais</Link> ]
                            </TableCell>
                            <TableCell align="left">
                                [ <Link to={`/edition/${dado.id}`} className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold">Editar</Link> ]
                            </TableCell>
                            <TableCell align='left'>
                                <button onClick={() => deleteData(dado)} type="button" className="btn btn-danger fw-semibold ms-2">Excluir</button>    
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                <h3 className='mt-2'>{error}</h3>
            </div>
        </section>
    )
}

export default Data