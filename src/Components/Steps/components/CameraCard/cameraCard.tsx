import { Row } from "antd";
import { useState } from "react";
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
  NewPriceP,
  OldPriceP,
  PriceDiv,
  PriceValue,
  QuantityButton,
  QuantityDiv,
  QuantitySpan,
  SaveBadge,
  TitleP,
} from "./cameraCard.styles";
import { useDispatch } from "react-redux";
import {
  decreaseSelectedItems,
  increaseSelectedItems,
} from "../../../../Store/Reducers/cameraSlice";

const CameraCard = ({ item }: { item: any }) => {
  const [Quantity, setQuantity] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number>();
  const dispatch = useDispatch();

  const handleQuantityPlus = () => {
    const next = Quantity + 1;
    setQuantity(next);

    if (Quantity === 0) {
      dispatch(increaseSelectedItems());
    }

    if (next >= 1) {
      setSelectedCard(true);
    }
  };

  const handleQuantityMinus = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));

    if (Quantity === 1) {
      dispatch(decreaseSelectedItems());
    }

    if (Quantity - 1 === 0) {
      setSelectedCard(false);
    }
  };

  const handleColor = (color: any) => {
    setSelectedColor(color.id);
  };

  return (
    <div>
      <Cameracard
        style={{ border: selectedCard ? "solid 2px #4E2FD2B2" : "none" }}
      >
        <Row align="stretch">
          <ImgCol
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={8}
          >
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
            <PriceDiv>
              <QuantityDiv>
                <QuantityButton
                  style={{
                    background: Quantity > 0 ? "#F0F4F7" : "#FFFFFF",
                    color: Quantity > 0 ? "#575757" : "#CED6DE",
                    border: Quantity > 0 ? "none" : "solid 2px #E6EBF0",
                  }}
                  onClick={handleQuantityMinus}
                >
                  -
                </QuantityButton>
                <QuantitySpan>{Quantity ?? 0}</QuantitySpan>
                <QuantityButton
                  style={{
                    background: "#F0F4F7",
                    color: "#575757",
                    border: "none",
                  }}
                  onClick={handleQuantityPlus}
                >
                  +
                </QuantityButton>
              </QuantityDiv>
              <PriceValue>
                <OldPriceP>{item.oldPrice}</OldPriceP>
                <NewPriceP>{item.newPrice}</NewPriceP>
              </PriceValue>
            </PriceDiv>
          </DetailsCol>
        </Row>
      </Cameracard>
    </div>
  );
};

export default CameraCard;
