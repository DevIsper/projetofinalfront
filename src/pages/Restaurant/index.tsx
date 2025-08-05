import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Restaurant = () => {
    return (
        <>
            <Header isHome={false} />
            <div className="container">
                <h1>Página do Restaurante</h1>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant