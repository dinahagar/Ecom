import ShippingIcon from "../../../../icons/shipping.png";
import { ShippingDiv, ShippingFree, ShippingImg, ShippingImgDiv, ShippingP, ShippingPrice } from "./shipping.styles";

const Shipping = () => {

  return (
  <ShippingDiv>
    <ShippingImgDiv>
      <ShippingImg src={ShippingIcon} alt="" />
      <ShippingP>Fast Shipping</ShippingP>
    </ShippingImgDiv>
    <div>
      <ShippingPrice>$5.99</ShippingPrice>
      <ShippingFree>FREE</ShippingFree>
    </div>
  </ShippingDiv>
  );
};

export default Shipping;
