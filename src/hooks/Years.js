import { useState } from "react"

export const Years = () => {
    const [years, setYears] = useState(0)

    function inc() {
        setYears(years + 1)
    }

    function dec() {
        setYears(years - 1)
    }
    
    return (
        <>
            <h1>Years count: {years}</h1>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
        </>
    )
}