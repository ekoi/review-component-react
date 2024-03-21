import React, {useState} from 'react';
import * as Form from '@radix-ui/react-form';
import StarRating from "./StarRating";

interface FormParam{
    id: string
    user: string
    handleRating: any
}
const ReviewForm = ({id, user, handleRating}:FormParam) => {
    const [stars, setStars] = useState(0);
    const [invalidStars, setInvalidStars] = useState(false);
    const [success, setSuccess] = useState(false)

    return (
        success ?
            <div className="reviewForm">Succesfully submitted</div>
            :
        <Form.Root
            // `onSubmit` only triggered if it passes client-side validation
            onSubmit={async (event) => {
                event.preventDefault();
                if (!stars) {
                    setInvalidStars(true)
                    return;
                }
                setInvalidStars(false)
                const data = Object.fromEntries(new FormData(event.currentTarget));
                let reviewText = data['reviewText']
                handleRating(stars, reviewText)
            }}
        >
            <StarRating
                page_id={id}
                rate={stars}
                user_id={user}
                readonly={false}
                handleRating={setStars}
            />
            {invalidStars && stars === 0 && <div>Please enter a rating</div>}
            <Form.Field name="review">
                <Form.Label className="FormLabel">Your Review</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your review
                </Form.Message>
                <Form.Control asChild>
                    <textarea name="reviewText" className="Textarea" rows="10" cols="115" required />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button className="Button" style={{ marginTop: 10 }}>
                    Post review
                </button>
            </Form.Submit>
        </Form.Root>
    );
}

export default ReviewForm;

