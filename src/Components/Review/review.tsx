import React from 'react'
import ReviewHeader from './components/reviewHeader'
import { ReviewDiv, ReviewP } from './review.styles'

const Review = () => {
  return (
    <ReviewDiv>
        <ReviewP>Review</ReviewP>
        <ReviewHeader />
    </ReviewDiv>
  )
}

export default Review