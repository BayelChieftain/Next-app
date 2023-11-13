"use client"
import { FunctionComponent, useState } from "react";
import { useCount } from "../hooks/useCount";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import '../globals.css'

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
    return (
        <div>
            <FilmInfo 
                title={title}
                genre={genre}
                seasonsCount={seasonsCount}
            />
            <div>
                <button className="red" onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>

            </div>
        </div>
    )
}
