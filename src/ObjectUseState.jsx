import React, {useState} from "react"

function ObjectUseState(){

    const [car, setCar] = useState({
        year : 2024,
        make : "Ford",
        model : "Mustang",
    })

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }
    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }
    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" onChange={handleYearChange} value={car.year} />
            <input type="text" onChange={handleMakeChange} value={car.make} />
            <input type="text" onChange={handleModelChange} value={car.model}/>
        </div>
    )

}

export default ObjectUseState