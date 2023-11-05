import { FunctionComponent, useEffect, useState } from "react";

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
    let [count, setCount] = useState(0)
    useEffect( () => {
        console.log(count)
    }, [count])
    return (
        <div>
            <p>{title || 'Unknown films'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>

            <div>
                <button onClick={ () => {setCount(count - 1)}}>-</button>
                {count}
                <button onClick={ () => {setCount(count + 1)}}>+</button>

            </div>
        </div>
    )
}