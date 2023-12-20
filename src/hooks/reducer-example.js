import { useReducer } from "react"

// const ACTIONS_TYPES = {
//     DEC: 'DEC'
//     INC: 'INC'
// }

const initialState = {
    counter: 1
}

function reducer(state, action) {
    // console.log(state)
    // console.log(action)

   switch (action.type) {
    case 'dec':
    return {
        ...state,
        counter: state.counter - action.payload
    } 

    case 'inc':
    return {
        ...state,
        counter: state.counter + action.payload
    }

    case 'reset':
    return {
        ...state,
        counter: 0
    }
   
    default:
    return {
        ...state
    }
   }
}


// action генераторы

function inc (payload) {
    return {
        type: 'inc',
        payload
    }
}

function dec (payload) {
    return {
        type: 'dec',
        payload
    }
}

function reset (payload) {
    return {
        type: 'reset',
        payload
    }
}


export const ReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // reducer - предыдущее состояние, экшен (action) с типом для изменения и возвращает новое состояние
    // initialState - начальное состояние

  
    function handleClick() {
        // dispatch() - передаем объект action (действие), у действия 2 параметра
        // type - тип
        // payload - полезная нагрузка
        dispatch({
            type: 'ADD',
            payload: 3
        })
    }

    return (
        <div>
            <button onClick={() => dispatch(dec(1))}> -1 </button>
            <button onClick={() => dispatch(dec(2))}> -3 </button>
                        <span> {state.counter} </span>
            <button onClick={() => dispatch(inc(1))}> +1 </button>
            <button onClick={() => dispatch(inc(2))}> +2 </button>
            <button onClick={() => dispatch(reset(0))}> Reset </button>
        </div>
    )
}