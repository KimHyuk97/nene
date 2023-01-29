import React from "react"
import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
