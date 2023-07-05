
'use client'
import { useState , useEffect } from "react";
import Desc from "./desc";


function UseState() {
    const [isi , MenggantiIsi] = useState("Sedang Di Test...")

    useEffect (() => {


    }, [])

    return (
        <div> Use State Ber isi `{isi}`
        <br />
        ganti ke : 
        <br />
        <Desc />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => MenggantiIsi("Dalam Uji Coba")}> `Dalam Uji Coba` </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => MenggantiIsi("Sedang Di Test...")}> `Sedang Di Test...` </button>
            
            </div>
        
    )
}
export default UseState
