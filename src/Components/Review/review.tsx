import React from "react";
import ReviewHeader from "./components/ReviewHeader/reviewHeader";
import ReviewItems from "./components/ReviewItems/reviewItems";
import Shipping from "./components/Shipping/shipping";
import { ReviewDiv, ReviewP } from "./review.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import ReviewSensors from "./components/ReviewSensors/reviewSensors";
import ReviewProtection from "./components/ReviewProtection/reviewProtection";
import ReviewPlan from "./components/ReviewPlan/reviewPlan";
import Checkout from "./components/Checkout/checkout";

const Review = () => {
  const quantities = useSelector((state: RootState) => state.camera.quantities);
  const planType = useSelector((state: RootState) => state.plan.planType);

  return (
    <ReviewDiv>
      <ReviewP>Review</ReviewP>
      <ReviewHeader />
      <ReviewItems />
      <ReviewSensors />
      <ReviewProtection />
      {planType && <ReviewPlan />}
      {Object.values(quantities).some((quantity: any) => quantity > 0) && (
        <Shipping />
      )}
      {(planType || Object.values(quantities).some((quantity: any) => quantity > 0)) && <Checkout />}
    </ReviewDiv>
  );
};

export default Review;
