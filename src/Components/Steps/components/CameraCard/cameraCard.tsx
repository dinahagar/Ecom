import { Row } from "antd";
import { useState } from "react";
import Price from "../Price/price";
import { useSelector } from "react-redux";
import {
  ButtonImg,
  Cameracard,
  ColorButton,
  ColorName,
  ColorsDiv,
  DescP,
  DescSpan,
  DetailsCol,
  ImgCol,
  SaveBadge,
  TitleP,
} from "./cameraCard.styles";
import { RootState } from "../../../../Store/store";
const CameraCard = ({ item }: { item: any }) => {
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number>();
  const quantities = useSelector((state: RootState) => state.camera.quantities);

  const handleColor = (color: any) => {
    setSelectedColor(color.id);
  };

  return (
    <div>
      <Cameracard
        style={{ border: selectedCard ? "solid 2px #4E2FD2B2" : "none" }}
      >
        <Row align="stretch">
          <ImgCol xs={24} sm={24} md={24} lg={24} xl={8}>
            {item.badge && (
              <SaveBadge size="medium">
                <span>Save</span>
                <span>{item.badge}</span>
              </SaveBadge>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                maxHeight: "101px",
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{ width: "101px", height: "101px" }}
              />
            </div>
          </ImgCol>
          <DetailsCol xs={24} sm={24} md={24} lg={24} xl={16}>
            <TitleP>{item.title}</TitleP>
            <DescP>
              {item.desc}
              <DescSpan>Learn More</DescSpan>
            </DescP>
            <ColorsDiv>
              {item.colors.map((color: any) => {
                return (
                  <ColorButton
                    key={color?.id}
                    style={{
                      background:
                        selectedColor === color.id ? "#1DF0BB0A" : "#FFFFFF",
                      border:
                        selectedColor === color.id
                          ? "solid .5px #0AA288"
                          : "solid .5px #CCCCCC",
                    }}
                    onClick={() => handleColor(color)}
                  >
                    <ButtonImg src={color.img} alt="" />
                    <ColorName>{color.name}</ColorName>
                  </ColorButton>
                );
              })}
            </ColorsDiv>
            <Price
              item={item}
              setSelectedCard={setSelectedCard}
              quantities={quantities}
              minusButtonStyle={{
                background:
                  (quantities[item?.id] ?? 0) > 0 ? "#F0F4F7" : "#FFFFFF",
                color: (quantities[item?.id] ?? 0) > 0 ? "#575757" : "#CED6DE",
                border:
                  (quantities[item?.id] ?? 0) > 0
                    ? "none"
                    : "solid 2px #E6EBF0",
              }}
              plusButtonStyle={{
                background: "#F0F4F7",
                color: "#575757",
                border: "none",
              }}
              oldPriceStyle={{
                fontSize: "16px",
                color: "#D8392B",
              }}
              newPriceStyle={{
                fontSize: "16px",
                color: "#575757",
              }}
            />
          </DetailsCol>
        </Row>
      </Cameracard>
    </div>
  );
};

export default CameraCard;
