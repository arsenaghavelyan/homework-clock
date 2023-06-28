import { useEffect, useState } from "react"

export default function Timer() {
    let time = new Date().toLocaleTimeString()
    const [currentTime,setCurrentTime] = useState(time)
    
    function updateTime() {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    useEffect (()=>{
        const intervalID = setInterval(()=> updateTime(),1000)
        return ()=>{
            clearInterval(intervalID)
        }
    },[])
    return(
        <div className="container">
            <h1>{currentTime}</h1>
        </div>
    )
}