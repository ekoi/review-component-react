import React from 'react';

interface FormParam {
    id: string;
    user: string;
}
declare const ReviewForm: ({ id, user }: FormParam) => React.JSX.Element;

interface RatingProps {
    user_id: string;
    page_id: string;
    rate: number;
    readonly: boolean;
    handleRating: any;
}
declare function StarRating({ user_id, page_id, rate, readonly, handleRating }: RatingProps): React.JSX.Element;

export { ReviewForm, StarRating };
