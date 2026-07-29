import { SectionP } from "../ReviewItems/reviewItems.style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import {
  CamDiv,
  CamImg,
  CamP,
} from "../../../Steps/components/Plan/plan.styles";
import Plan500 from "../../../../icons/plan500.png";
import {
  NewPriceP,
  OldPriceP,
  PriceValue,
} from "../../../Steps/components/Price/price.styles";
import { AllPlanType, PlanTypeDiv } from "./reviewPlan.styles";
import { useGetAllPlanApiQuery } from "../../../../Services/plan";

const ReviewPlan = () => {
  const { data: planData } = useGetAllPlanApiQuery({});

  const planType = useSelector((state: RootState) => state.plan.planType);
  const selectedType = planData?.items?.filter(
    (item: any) => item?.id === planType,
  );

  return (
    <div>
      <SectionP style={{ marginBottom: "0" }}>{planData?.section}</SectionP>
      <AllPlanType>
        <PlanTypeDiv>
          <CamDiv>
            <CamImg src={Plan500} alt="" style={{ marginTop: "5px" }} />
            <CamP>Cam</CamP>
          </CamDiv>
          <p style={{ color: "#4E2FD2", fontWeight: "500", fontSize: "16px" }}>
            {selectedType?.[0]?.type}
          </p>
        </PlanTypeDiv>
        <div>
          <PriceValue>
            <OldPriceP style={{ fontSize: "14px", color: "#6F7882" }}>
              {selectedType?.[0]?.oldPrice}
            </OldPriceP>
            <NewPriceP style={{ fontSize: "14px", color: "#4E2FD2" }}>
              {selectedType?.[0]?.newPrice}
            </NewPriceP>
          </PriceValue>
        </div>
      </AllPlanType>
    </div>
  );
};

export default ReviewPlan;
