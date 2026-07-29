import React from "react";
import { decreaseQuantity, decreaseSelectedItems, increaseQuantity, increaseSelectedItems } from "../../../../Store/Reducers/cameraSlice";
import { RootState } from "../../../../Store/store";
import { NewPriceP, OldPriceP, PriceDiv, PriceValue, QuantityButton, QuantityDiv, QuantitySpan } from "./price.styles";
import { useDispatch, useSelector } from "react-redux";

const Price = ({item, setSelectedCard} : {item: any, setSelectedCard: any}) => {
  const dispatch = useDispatch();
  const quantities = useSelector((state: RootState) => state.camera.quantities);

    const handleQuantityPlus = (item: any) => {
    const quantity = quantities[item.id] ?? 0;
    const next = quantity + 1;
    dispatch(increaseQuantity(item.id));

    if (quantity === 0) {
      dispatch(increaseSelectedItems());
    }

    if (next >= 1) {
      setSelectedCard(true);
    }
  };

  const handleQuantityMinus = (item: any) => {
    const quantity = quantities[item.id] ?? 0;
    dispatch(decreaseQuantity(item.id));

    if (quantity === 1) {
      dispatch(decreaseSelectedItems());
    }

    if (quantity - 1 === 0) {
      setSelectedCard(false);
    }
  };

  return (
    <PriceDiv>
      <QuantityDiv>
        <QuantityButton
          style={{
            background: (quantities[item.id] ?? 0) > 0 ? "#F0F4F7" : "#FFFFFF",
            color: (quantities[item.id] ?? 0) > 0 ? "#575757" : "#CED6DE",
            border:
              (quantities[item.id] ?? 0) > 0 ? "none" : "solid 2px #E6EBF0",
          }}
          onClick={() => handleQuantityMinus(item)}
        >
          -
        </QuantityButton>
        <QuantitySpan>{quantities[item.id] ?? 0 ?? 0}</QuantitySpan>
        <QuantityButton
          style={{
            background: "#F0F4F7",
            color: "#575757",
            border: "none",
          }}
          onClick={() => handleQuantityPlus(item)}
        >
          +
        </QuantityButton>
      </QuantityDiv>
      <PriceValue>
        <OldPriceP>{item.oldPrice}</OldPriceP>
        <NewPriceP>{item.newPrice}</NewPriceP>
      </PriceValue>
    </PriceDiv>
  );
};

export default Price;
