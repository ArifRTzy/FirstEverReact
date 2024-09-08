//useState(()=>{}) // berjalan setiap perubahan
//useState(()=>{},[])//hanya berubah sekali
//useState(()=>{},[width,height])//berubah setiap width dan height berubah

import React,{useEffect, useState} from "react";

function UseEffectWH(){

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")

        return () =>{
            window.removeEventListener("resize", handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    },[])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    },[width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p>Window Width : {width}</p>
        <p>Window Height : {height}</p>
        </>
    )

}

export default UseEffectWH