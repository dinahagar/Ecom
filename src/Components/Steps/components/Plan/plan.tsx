import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import Plan500 from "../../../../icons/plan500.png";
import { CamDiv, CamImg, CamP, PlanDiv, TypeDiv } from "./plan.styles";
import { useDispatch } from "react-redux";
import { selectedPlanType } from "../../../../Store/Reducers/planSlice";
import { useGetAllPlanApiQuery } from "../../../../Services/plan";

const Plan = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const { data: planData } = useGetAllPlanApiQuery({});

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    dispatch(selectedPlanType(e.target.value));
  };

  return (
    <PlanDiv>
      <CamDiv>
        <CamImg src={Plan500} alt="" />
        <CamP>Cam</CamP>
      </CamDiv>

      <Radio.Group
        onChange={onChange}
        value={value}
        options={[
          {
            value: 50,
            className: "option-1",
            label: (
              <TypeDiv>
                <p>{planData?.items?.[0]?.type}</p>
                <p>{planData?.items?.[0]?.oldPrice}</p>
              </TypeDiv>
            ),
          },
          {
            value: 60,
            className: "option-2",
            label: (
              <TypeDiv>
                <p>{planData?.items?.[1]?.type}</p>
                <p>{planData?.items?.[1]?.oldPrice}</p>
              </TypeDiv>
            ),
          },
        ]}
      />
    </PlanDiv>
  );
};

export default Plan;
