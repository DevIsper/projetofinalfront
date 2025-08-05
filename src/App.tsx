import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import RestauranteList from "./components/RestauranteList";

const App = () => {
    return (
        <>
            <GlobalCss />
            <Header />
            <div className="center">
                <div className="container">
                    <RestauranteList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App