import { useState } from "react";

export const useCounter = (initialCounter, step) => {
    const [counter, setCounter] = useState(initialCounter)

    function inc() {
        setCounter((c) => c  + step)
    }

    function dec() {
        if (counter === 0) {
            return
        }
        setCounter((c) => c - step)
    }

    return {
        count: counter,
        inc,
        dec
    }
}