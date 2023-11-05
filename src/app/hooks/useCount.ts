import { useState } from "react";

export function useCount(initialValue: number = 0) {
    let [count, setCount] = useState(initialValue)

    const decrement = () => {setCount(count - 1)}
    const increment = () => {setCount(count + 1)} 

    return { count, decrement, increment }
}