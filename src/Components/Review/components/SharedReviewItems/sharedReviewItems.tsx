import { Col } from "antd";
import { CameraItem } from "../../../../Interfaces/types";
import Price from "../../../Steps/components/Price/price";
import {
  CameraReviewItems,
  NameP,
  ReviewImg,
  ReviewImgDiv,
  ReviewRow,
} from "../ReviewItems/reviewItems.style";

const SharedReviewItems = ({
  item,
  quantities,
}: {
  item: CameraItem;
  quantities: Record<number, number>;
}) => {
    
  return (
    <div>
      <CameraReviewItems key={item.id}>
        <ReviewRow>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <ReviewImgDiv>
              <ReviewImg src={item.img} alt="" />
              <NameP>{item.title}</NameP>
            </ReviewImgDiv>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Price
              item={item}
              quantities={quantities}
              minusButtonStyle={{
                background: "#FFFFFF",
                color: "#575757",
                border: "none",
              }}
              plusButtonStyle={{
                background: "#FFFFFF",
                color: "#575757",
                border: "none",
              }}
              oldPriceStyle={{
                fontSize: "14px",
                color: "#6F7882",
              }}
              newPriceStyle={{
                fontSize: "14px",
                color: "#4E2FD2",
              }}
            />
          </Col>
        </ReviewRow>
      </CameraReviewItems>
    </div>
  );
};

export default SharedReviewItems;
