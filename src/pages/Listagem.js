import React from 'react'
import Card from '../components/Cards'
import Inicio from '../components/Inicio'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Total from '../components/Total'
import './Pages.css'

export default () => {
    return(
        <div className="App">
            <Header></Header>
            <Inicio></Inicio>
            <Card></Card>
            <Total></Total>
            
        </div>
    )
}