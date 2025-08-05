import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestauranteList from '../../components/RestauranteList'

const Home = () => {
    return (
        <>
            <Header isHome={true} />
            <div className="center">
                <div className="container">
                    <RestauranteList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home