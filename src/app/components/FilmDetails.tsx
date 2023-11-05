import { FunctionComponent, useEffect, useState } from "react";
import { useCount } from "../hooks/useCount";

interface Props {
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
}) => {
    let {count, increment, decrement} = useCount(0)
    useEffect( () => {
        console.log(count)
    }, [count])
    return (
        <div>
            <p>{title || 'Unknown films'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>

            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>

            </div>
        </div>
    )
}