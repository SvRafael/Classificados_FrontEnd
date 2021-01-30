import React, {Component, useState} from 'react';
import './Form.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import {Link, useHistory} from 'react-router-dom'


const url = 'http://localhost:3001/';





export default function Cadastro() {
    const history = useHistory();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    async function handleSubmit(){
        const data = {titulo: titulo, descricao: descricao}


        if(titulo !== '' && descricao !== ''){
            const url2 = `${url}classificados`;
            console.log(data);
            const response = await axios.post(url2, data);
            alert('Cadastro realizado com sucesso!')
            history.push('/classificados')
        }
        else{
            alert('Preencha os campos são obrigatórios.')
        }
    }

    return (
        <div className="divForm">
            <Container maxWidth="sm">
                <Typography component="div" className="container-class">
                <form  noValidate autoComplete="off" >
                <h1 style={{ textAlign: 'center', fontSize: '25px',fontFamily: 'font-family: Roboto, sans-serif;' }}>Novo Classificado</h1>
                    <TextField id="standard-basic" label="Título" value={titulo} onChange={e => setTitulo(e.target.value)}/>
                    <TextField id="standard-basic" label="Descrição" style={{marginTop: '1em'}} value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    <Button variant="contained" color="primary" style={{marginTop: '1em'}} onClick={handleSubmit}>Adicionar</Button>
                    <Link to="/classificados">
                        <Button variant="contained" color="primary">Ver Classificados</Button>
                    </Link>
                </form>
                </Typography>
            </Container>
        </div>  
    )
  }
  
