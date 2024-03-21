import React from 'react';

interface FormParam {
    handleRating: (stars: number, reviewText: string) => void;
}
declare function ReviewForm({ handleRating }: FormParam): React.JSX.Element;

interface RatingProps {
    rate: number;
    readonly: boolean;
    handleRating: (stars: number) => void;
}
declare function StarRating({ rate, readonly, handleRating }: RatingProps): React.JSX.Element;

export { ReviewForm, StarRating };
