import { useState , useEffect } from "react";


function MTK() {
    const [getValue , setValue] = useState(0)

    useEffect(() => {
        const  Random = +Math.floor(Math.random() * 999999999999999)
        setValue(Random)
    },[])

    return(
        <div className="text-cyan-500">Session ID = {getValue}</div>
    )
    
}

export default MTK