import React from 'react';
interface RatingProps {
    rate: number;
    readonly: boolean;
    handleRating: (stars: number) => void;
}
export default function StarRating({ rate, readonly, handleRating }: RatingProps): React.JSX.Element;
export {};
