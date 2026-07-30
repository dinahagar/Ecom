import React from "react";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../../Store/Reducers/cameraSlice";
import {
  NewPriceP,
  OldPriceP,
  PriceDiv,
  PriceValue,
  QuantityButton,
  QuantityDiv,
  QuantitySpan,
} from "./price.styles";
import { useDispatch } from "react-redux";

const Price = ({
  item,
  plusButtonStyle,
  minusButtonStyle,
  oldPriceStyle,
  newPriceStyle,
  quantities,
}: {
  item?: any;
  quantities: any;
  plusButtonStyle: any;
  minusButtonStyle: any;
  oldPriceStyle: any;
  newPriceStyle: any;
}) => {
  const dispatch = useDispatch();

  const handleQuantityPlus = (item: any) => {
    dispatch(increaseQuantity(item?.id));
  };

  const handleQuantityMinus = (item: any) => {
    dispatch(decreaseQuantity(item?.id));
  };

  return (
    <PriceDiv>
      <QuantityDiv>
        <QuantityButton
          style={{
            ...minusButtonStyle,
          }}
          onClick={() => handleQuantityMinus(item)}
        >
          -
        </QuantityButton>
        <QuantitySpan>{quantities[item?.id] ?? 0 }</QuantitySpan>
        <QuantityButton
          style={{
            ...plusButtonStyle,
          }}
          onClick={() => handleQuantityPlus(item)}
        >
          +
        </QuantityButton>
      </QuantityDiv>
      <PriceValue>
        <OldPriceP style={{ ...oldPriceStyle }}>{item?.oldPrice === "0" ? "FREE" : item?.oldPrice}</OldPriceP>
        <NewPriceP style={{ ...newPriceStyle }}>{item?.newPrice === "0" ? "FREE" : item?.newPrice}</NewPriceP>
      </PriceValue>
    </PriceDiv>
  );
};

export default Price;
