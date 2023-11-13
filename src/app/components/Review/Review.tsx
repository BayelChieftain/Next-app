"use client"
import { FunctionComponent } from "react";

export const Reviews = ({reviews}) => {
    return (
        <div>
            {
                reviews.length > 0 && reviews.map(
                    (review) => (
                    <div key={review.id}>
                        <span>{review.author}</span>
                        <span>{review.text}</span>
                        <span>{review.rating}</span>
                    </div>
                ))
            }
        </div>
    )
}