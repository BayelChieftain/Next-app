import { FunctionComponent } from "react";

interface Props {
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
}

export const FilmInfo: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
}) => {
    return (
        <>
            <p>{title || 'Unknown films'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>
        </>
    )
}