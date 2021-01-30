import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import './Inicio.css'

export default () => {
    return (
        <div className="divButton">
            <label>Classificados</label>
            <Link to="/novo">
                <Button variant="contained" color="primary" >
                    + Novo Classificado
                </Button>
            </Link>
        </div>
    )
}