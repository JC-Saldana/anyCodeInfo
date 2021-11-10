import React, {useState} from "react"

export const Ticket = (props) => {
    const [count, setCount] = useState(0)
    const [opcion, setOpcion] = useState("Ninguna")
    const increment = () => {
        setCount(count => count + 1)
        return 1
    }
    const setOpcionValue = (e) => {
        setOpcion(e.target.value)
    }
    return (
        <div>
            <h2 className="title">Name: {props.name}</h2>
            <button onClick={increment} className="title">add</button>
            <h2 className="total">{count}</h2>
            <select data-test="select" onChange={(e) => setOpcionValue(e)} value={opcion}>
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
                <option>HIGHEST</option>
            </select>
            <p>{opcion}</p>
        </div>
    )
}