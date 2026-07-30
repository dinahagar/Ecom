import checkout from "../../../../icons/checkout.png";
import { useGetAllCamerasQuery } from "../../../../Services/camera";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import { useGetAllSensorsQuery } from "../../../../Services/sensors";
import { useGetAllPlanApiQuery } from "../../../../Services/plan";
import { useGetAllProtectionApiQuery } from "../../../../Services/protection";
import {
  CheckImgDiv,
  CheckoutBadge,
  CheckoutButton,
  CheckoutPrice,
  CheckoutSection,
  CheckoutSpace,
  CongratsP,
  NewCheckout,
  OldCheckout,
  SaveButton,
} from "./checkout.styles";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { resetColor, resetQuantities } from "../../../../Store/Reducers/cameraSlice";
import { resetPlan } from "../../../../Store/Reducers/planSlice";
import { Calculate, PlanItem } from "../../../../Interfaces/types";

const Checkout = () => {
  const dispatch = useDispatch();
  const { data: cameraData } = useGetAllCamerasQuery({});
  const { data: sensorsData } = useGetAllSensorsQuery({});
  const { data: protectionData } = useGetAllProtectionApiQuery({});
  const { data: planData } = useGetAllPlanApiQuery({});

  const quantities = useSelector((state: RootState) => state.camera.quantities);
  const planType = useSelector((state: RootState) => state.plan.planType);
  const selectedColor = useSelector(
    (state: RootState) => state.camera.selectedColor,
  );

  const selectedType = planData?.items?.filter(
    (item: PlanItem) => item?.id === Number(planType),
  );

  const calculatePrices = (
    items: Calculate[] = [],
    quantities: Record<number, number>,
  ) => {
    const selectedItems = items.filter(
      (item: Calculate) => (quantities[item.id] ?? 0) > 0,
    );

    return selectedItems.reduce(
      (acc, item) => {
        const quantity = quantities[item.id] ?? 0;
        const oldPrice = Number(
          item.oldPrice.replace("$", "").replace("/mo", ""),
        );
        const newPrice = Number(
          item.newPrice.replace("$", "").replace("/mo", ""),
        );
        acc.old += oldPrice * quantity;
        acc.new += newPrice * quantity;

        return acc;
      },
      { old: 0, new: 0 },
    );
  };

  const cameraPrices = calculatePrices(cameraData?.items, quantities);
  const sensorPrices = calculatePrices(sensorsData?.items, quantities);
  const protectionPrices = calculatePrices(protectionData?.items, quantities);

  const planPrices = {
    old:
      selectedType?.length > 0
        ? Number(
            selectedType?.[0]?.oldPrice?.replace("$", "").replace("/mo", ""),
          )
        : 0,
    new:
      selectedType?.length > 0
        ? Number(
            selectedType?.[0]?.newPrice?.replace("$", "").replace("/mo", ""),
          )
        : 0,
  };

  const CheckoutOldPrice =
    cameraPrices?.old +
    sensorPrices?.old +
    protectionPrices.old +
    planPrices.old;
  const CheckoutNewPrice =
    cameraPrices?.new +
    sensorPrices?.new +
    protectionPrices.new +
    planPrices.new;
  const savings = CheckoutOldPrice - CheckoutNewPrice;

  const success = () => {
    Modal.success({
      content: "Congrats! You checked out.",
    });
    localStorage.removeItem("savedSystem");
    dispatch(resetQuantities())
    dispatch(resetColor())
    dispatch(resetPlan())
  };

  const handleSaveMySystem = () => {
    const savedSystem = {
      quantities,
      selectedColor,
      planType,
    };
    localStorage.setItem("savedSystem", JSON.stringify(savedSystem));    
  };
  
  return (
    <>
      <CheckoutSection>
        <CheckImgDiv>
          <img
            src={checkout}
            alt=""
            style={{ width: "78px", height: "78px" }}
          />
          <div style={{ textAlign: "end" }}>
            <CheckoutBadge size="medium">
              <span>as low as $19.19/mo</span>
            </CheckoutBadge>
            <CheckoutPrice>
              <OldCheckout>
                {CheckoutOldPrice > 0
                  ? `$${CheckoutOldPrice.toFixed(2)}`
                  : null}
              </OldCheckout>
              <NewCheckout>
                {CheckoutNewPrice > 0
                  ? `$${CheckoutNewPrice.toFixed(2)}`
                  : null}
              </NewCheckout>
            </CheckoutPrice>
          </div>
        </CheckImgDiv>
        <div>
          <CongratsP>
            Congrats! You’re saving ${savings.toFixed(2)} on your security
            bundle!
          </CongratsP>
        </div>
        <CheckoutSpace wrap>
          <CheckoutButton onClick={success}>Checkout</CheckoutButton>
        </CheckoutSpace>
        <div>
          <SaveButton onClick={handleSaveMySystem}>
            Save my system for later
          </SaveButton>
        </div>
      </CheckoutSection>
    </>
  );
};

export default Checkout;
