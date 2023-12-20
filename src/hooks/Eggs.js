// import { useState } from "react"
import { useState } from "react"
import { useCounter } from "./useCounter"

export const Eggs = () => {

    const {count, dec, inc} = useCounter(0, 10)
    const [pass, setPass] = useState('')

    // const [count, setCount] = useState(0)

    // function inc() {
    //     setCount((cn) => cn + 10)
    // }

    // function dec() {
    //     setCount(count - 10)
    // }

    function passwordCheck(pass) {
        
    }

    function handleChamge(e) {
        setPass(e.target.value)
        passwordCheck(pass)
    }

    return (
        <>
            <h1>Eggs count: {count}</h1>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <input type="text" onChange={(e) => handleChamge(e)}/>
        </>
    )
}