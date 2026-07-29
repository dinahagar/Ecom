import { RootState } from "../../../../Store/store";
import { useSelector } from "react-redux";
import { useGetAllCamerasQuery } from "../../../../Services/camera";
import { Col, Row } from "antd";
import Price from "../../../Steps/components/Price/price";
import { NameP, ReviewImg, ReviewImgDiv, SectionP } from "./reviewItems.style";

const ReviewItems = () => {
  const { data } = useGetAllCamerasQuery({});
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const reviewItems = data?.items?.filter(
    (item: any) => (quantities[item.id] ?? 0) > 0,
  );

  return (
    <div>
      {reviewItems?.length > 0 && (
        <>
          <SectionP>{data?.section}</SectionP>
        </>
      )}
      {reviewItems?.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.section}</p>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <ReviewImgDiv>
                  <ReviewImg src={item.img} alt="" />
                  <NameP>{item.title}</NameP>
                </ReviewImgDiv>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
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
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewItems;
