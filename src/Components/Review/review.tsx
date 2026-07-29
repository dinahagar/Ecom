import React from 'react'
import ReviewHeader from './components/ReviewHeader/reviewHeader'
import ReviewItems from './components/ReviewItems/reviewItems'
import { ReviewDiv, ReviewP } from './review.styles'

const Review = () => {
  return (
    <ReviewDiv>
        <ReviewP>Review</ReviewP>
        <ReviewHeader />
        <ReviewItems />
    </ReviewDiv>
  )
}

export default Review