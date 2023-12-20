import { click } from "@testing-library/user-event/dist/click"
import { useCallback, useMemo, memo, useState, useEffect } from "react"

// useCallBack - для функции
// useMemo - для значений
// React.memo
// memo (hoc) - для компонентов


const Button = ({click}) => {
    console.log(`Button отрисован в ${new Date().toLocaleTimeString()}`)
    return (
        <button onClick={click}> Нажми меня </button>
    )
}


// memo
const Greeting = memo(({name}) => {
    useEffect(() => {
        console.log(`Компонент Greeting отрисован в ${new Date().toLocaleTimeString()}`)
    })
    return (
        <h2> {`Hello ${name}`} </h2>
    )
})

export const AppMemoExample = () => {
    const [name, setName] = useState('')

    const buttonHandler = () => setName('World')

    return (
        <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <Greeting name={name}/>
        <Button click={buttonHandler} />
        </>
    )
}