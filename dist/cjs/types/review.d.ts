import React from 'react';
interface FormParam {
    handleRating: (stars: number, reviewText: string) => void;
}
export default function ReviewForm({ handleRating }: FormParam): React.JSX.Element;
export {};
