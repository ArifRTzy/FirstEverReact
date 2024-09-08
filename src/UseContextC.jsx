import UseContentD from "./UseContextD";

function UseContentC(){

    return(
        <div style={{border: '2px solid black', padding: '25px'}}>
            <h1>ComponentC</h1>
            <UseContentD/>
        </div>
    )

}

export default UseContentC