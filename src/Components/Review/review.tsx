import React from "react";
import ReviewHeader from "./components/ReviewHeader/reviewHeader";
import ReviewItems from "./components/ReviewItems/reviewItems";
import Shipping from "./components/Shipping/shipping";
import { ReviewDiv, ReviewP } from "./review.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import ReviewSensors from "./components/ReviewSensors/reviewSensors";
import ReviewProtection from "./components/ReviewProtection/reviewProtection";

const Review = () => {
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  return (
    <ReviewDiv>
      <ReviewP>Review</ReviewP>
      <ReviewHeader />
      <ReviewItems />
      <ReviewSensors />
      <ReviewProtection />
      {Object.values(quantities).some((quantity: any) => quantity > 0) && (
        <Shipping />
      )}
    </ReviewDiv>
  );
};

export default Review;
