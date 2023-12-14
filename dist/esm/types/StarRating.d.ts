import React from 'react';
interface RatingProps {
    user_id: string;
    page_id: string;
    rate: number;
    readonly: boolean;
    handleRating: any;
}
export default function StarRating({ user_id, page_id, rate, readonly, handleRating }: RatingProps): React.JSX.Element;
export {};
