import { useState } from "react"
import { Row } from "./row"
import { myContext } from "../context-example"
import { info } from "sass"

export const Table = () => {

    const [num, setNum] = useState(20)
    const [theme, setTheme] = useState('dark')

    const themeHandler = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
    }

    return (
    <>
    <myContext.Provider value={{info: 20, theme}}>
        <table style={{border: '1px solid gray'}}> 
                {/* <Row info={num}/> */}
                <Row />
            </table>
            <button onClick={themeHandler}> Toggle theme </button>
    </myContext.Provider>
    </>

    )
}

// props drilling