

function Button(){

    //click to count your clicks
    // let count = 0 

    // const handleClick = (name) =>{
    //     if(count < 3){
    //         count++
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // }
    // to call using onClick={()=>handleClick("puss")}

    const handleClick = (e) => e.target.textContent = "ouch"

    return (
        <button onDoubleClick={(e)=>(handleClick(e))}>Click me 😘</button>
    )
}

export default Button