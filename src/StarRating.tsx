import React from 'react';
import {Rating} from 'react-simple-star-rating';

const tooltipArray = [
    'Terrible',
    'Bad',
    'Average',
    'Great',
    'Awesome',
];

interface RatingProps {
    rate: number
    readonly: boolean
    handleRating: (stars: number) => void
}

export default function StarRating({rate, readonly, handleRating}: RatingProps) {
    return (
        <Rating
            onClick={handleRating}
            initialValue={rate}
            readonly={readonly}
            showTooltip
            tooltipArray={tooltipArray}
        />
    )
}
