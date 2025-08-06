import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {PratosList} from "../../components/PratosList";

const Restaurant = () => {
    return (
        <>
            <Header isHome={false} />
            <div className="container">
                <h1>Página do Restaurante</h1>
                <PratosList isJaponesa={true}/>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant