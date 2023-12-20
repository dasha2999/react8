import { useState, useEffect } from 'react'
import { Components } from './searchBar.styled'
import './searchbar.scss'


export const SearchBar = ({whenClick, someProp}) => {
    const [inputText, setInputText] = useState('')

    function handleChange({target: {value}}) {
        setInputText(value)
        whenClick(value)
    }


    const cls = inputText.length > 5 ? 'green' : 'red'
    // two way binding
    useEffect(() => {
        const listener = (event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                console.log('Нажали Enter')
                whenClick(inputText)
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    },[inputText])

    // console.log(inputText)

    return (
        // <div className="search">
        //     <h2 className={cls}>Search Bar</h2>
            // <input className={cls} value={inputText} onChange={handleChange} type="text" className="search-input"/>
        //     {/* <input onChange={(e) => {console.log(e.target.value)}} type="text" className="search-input"/> */}
        //     <button onClick={() => whenClick(inputText)} className="search-button">Find user</button>
        // </div>
        // <button type='button'>Text</button>
        <Components.Wrapper>
            <h2>Search Bar</h2>
            <Components.Input type="text" value={inputText} onChange={handleChange}/>
            <Components.Button onClick={() => whenClick(inputText)}>Find user</Components.Button>
        </Components.Wrapper>
    )
}