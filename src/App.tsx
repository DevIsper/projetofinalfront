import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RestauranteList from "./components/RestauranteList";
import Restaurant from "./pages/Restaurant";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <GlobalCss />

            <BrowserRouter>
                <GlobalCss />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurant/:id" element={<Restaurant />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App


// <Header />
// <div className="center">
//     <div className="container">
//     <RestauranteList />
//     </div>
// </div>
// <Footer />