import React,{useState,useEffect,useRef} from "react";

function UseRef(){
    
    const inputRef = useRef(null)

    useEffect(() =>{
        console.log("rerender")
    })

    function handleClick(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
    }

    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <input type="text" ref={inputRef}/>
        </div>
    )

}

export default UseRef