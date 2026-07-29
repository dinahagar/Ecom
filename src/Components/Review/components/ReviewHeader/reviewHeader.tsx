import React from 'react'
import { ReviewH3, ReviewHeaderP } from './reviewHeader.styles'

const ReviewHeader = () => {
  return (
    <div style={{ marginBottom: '10px' }}>
        <ReviewH3>Your security system</ReviewH3>
        <ReviewHeaderP>Review your personalized protection system designed to keep what matters most safe.</ReviewHeaderP>
    </div>
  )
}

export default ReviewHeader