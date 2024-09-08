import React,{useState, createContext} from "react";
import UseContentB from "./UseContextB";

export const UserContext = createContext()

function UseContextA(){

    const [user, setUser] = useState("arppp")

    return(
        <div style={{border: '2px solid black', padding: '25px'}}>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <UseContentB user={user}/>
            </UserContext.Provider>
        </div>
    )

}

export default UseContextA