import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <GlobalCss />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurant/:id" element={<Restaurant />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App