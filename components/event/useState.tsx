
'use client'
import { useState } from "react";

function UseState() {
    const [isi , mengisiIsi] = useState("Sedang Di Test...")
    console.log(isi);
    return (
        <div> Use State Ber isi `{isi}`
        <br />
        ganti ke : 
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => mengisiIsi("Dalam Uji Coba")}> `Dalam Uji Coba` </button>
            
            </div>
        
    )
}
export default UseState
