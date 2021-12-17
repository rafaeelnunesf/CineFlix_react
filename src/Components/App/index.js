import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import "../reset.css"
import "./style.css"

import SelectMovie from "../SelectMovie"
import SelectTime from "../SelectTime"
import SelectSeat from "../SelectSeat"
import Success from "../Success"
import Header from "../Header"

export default function App() {
    const [idMovie,setIdMovie] = useState()
    const [idSession, setIdSession] = useState()
    const [userData, setUserData] = useState({ids:[],name:'',cpf:''})
    return(
        <div className="page">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<SelectMovie setIdMovie={setIdMovie}/>}/>
                    <Route path={`/sessions/${idMovie}`} element={<SelectTime idMovie={idMovie} setIdSession={setIdSession}/>}/>
                    <Route path={`/seats/${idSession}`} element={<SelectSeat idSession={idSession} setUserData={setUserData}/>}/>
                    <Route path="/success" element={<Success userData={userData}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}