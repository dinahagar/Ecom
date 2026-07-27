import { Col, Row } from "antd";
import { useGetAllCamerasQuery } from "../../../../Services/camera";
import {
  ButtonImg,
  CameraCard,
  CameraCol,
  ColorButton,
  ColorName,
  ColorsDiv,
  DescP,
  DescSpan,
  DetailsCol,
  NewPriceP,
  NextBtn,
  NextBtnDiv,
  OldPriceP,
  PriceDiv,
  QuantityButton,
  QuantityDiv,
  QuantitySpan,
  SaveBadge,
  TitleP,
} from "./camera.styles";

const Camera = ({activeKey, setActiveKey}: {activeKey: string, setActiveKey: any}) => {
  const { data } = useGetAllCamerasQuery({});

  const handleNextBtn = () => {
    if(Number(activeKey) < 4) {
      setActiveKey(String(Number(activeKey) + 1));
    }
  }
  
  return (
    <div>
      <Row gutter={24} style={{ display: 'flex', justifyContent: 'center' }}>
        {data?.map((item: any) => {
          return (
            <CameraCol key={item.id} xs={24} sm={24} md={12} lg={12} xl={12}>
              <CameraCard>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    {item.badge && (
                      <SaveBadge size="medium">
                        <span>Save</span>
                        <span>{item.badge}</span>
                      </SaveBadge>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', maxHeight: '101px' }}>
                      <img
                        src={item.img}
                        alt=""
                        style={{ width: "101px", height: "101px" }}
                      />
                    </div>
                  </Col>
                  <DetailsCol xs={24} sm={24} md={24} lg={16} xl={16}>
                    <TitleP>{item.title}</TitleP>
                    <DescP>
                      {item.desc}
                      <DescSpan>Learn More</DescSpan>
                    </DescP>
                    <ColorsDiv>
                      {item.colors.map((color: any) => {
                        return (
                          <ColorButton style={{ background: "#FFFFFF" }}>
                            <ButtonImg src={color.img} alt="" />
                            <ColorName>{color.name}</ColorName>
                          </ColorButton>
                        );
                      })}
                    </ColorsDiv>
                    <PriceDiv>
                      <QuantityDiv>
                        <QuantityButton
                          style={{ background: "#FFFFFF", color: "#CED6DE" }}
                        >
                          -
                        </QuantityButton>
                        <QuantitySpan>1</QuantitySpan>
                        <QuantityButton
                          style={{ background: "#FFFFFF", color: "#CED6DE" }}
                        >
                          +
                        </QuantityButton>
                      </QuantityDiv>
                      <div>
                        <OldPriceP>{item.oldPrice}</OldPriceP>
                        <NewPriceP>{item.newPrice}</NewPriceP>
                      </div>
                    </PriceDiv>
                  </DetailsCol>
                </Row>
              </CameraCard>
            </CameraCol>
          );
        })}
      </Row>
      <NextBtnDiv>
        <NextBtn onClick={handleNextBtn}>Next: Choose your plan</NextBtn>
      </NextBtnDiv>
    </div>
  );
};

export default Camera;
