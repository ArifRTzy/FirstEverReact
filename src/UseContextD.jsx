import React,{useContext} from "react";
import { UserContext } from "./UseContextA";

function UseContentD(){

    const user = useContext(UserContext)

    return(
        <div style={{border: '2px solid black', padding: '25px'}}>
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )

}

export default UseContentD