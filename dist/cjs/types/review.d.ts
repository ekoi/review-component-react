import React from 'react';
interface FormParam {
    id: string;
    user: string;
    handleRating: any;
}
declare const ReviewForm: ({ id, user, handleRating }: FormParam) => React.JSX.Element;
export default ReviewForm;
