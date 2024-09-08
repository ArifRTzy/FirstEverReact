import UseContentC from "./UseContextC"

function UseContentB(){

    return(
        <div style={{border: '2px solid black', padding: '25px'}}>
            <h1>ComponentB</h1>
            <UseContentC/>
        </div>
    )

}

export default UseContentB