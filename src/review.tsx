import React, {useState} from 'react';
import * as Form from '@radix-ui/react-form';
import StarRating from './StarRating';

interface FormParam {
    handleRating: (stars: number, reviewText: string) => void
}

export default function ReviewForm({handleRating}: FormParam) {
    const [stars, setStars] = useState(0);
    const [invalidStars, setInvalidStars] = useState(false);
    const [success, setSuccess] = useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (!stars) {
            setInvalidStars(true)
            return;
        }
        setInvalidStars(false)
        const data = Object.fromEntries(new FormData(event.currentTarget as any));
        let reviewText = data['reviewText'] as string;
        handleRating(stars, reviewText)
    }

    return (
        success ?
            <div className="reviewForm">Successfully submitted</div>
            :
            <Form.Root className="reviewForm" onSubmit={onSubmit}>
                <StarRating
                    rate={stars}
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
                        <textarea name="reviewText" className="Textarea" rows={10} cols={115} required/>
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <button className="Button" style={{marginTop: 10}}>
                        Post review
                    </button>
                </Form.Submit>
            </Form.Root>
    );
}
