import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const tooltipArray = [
  "Terrible",
  "Bad",
  "Average",
  "Great",
  "Awesome",
];

interface RatingProps {
  user_id: string
  page_id: string
  rate: number
  readonly : boolean
  handleRating: (stars: number) => void
}
export default function StarRating({ user_id, page_id, rate , readonly, handleRating}: RatingProps) {
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