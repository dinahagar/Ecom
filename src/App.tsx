import { Col } from "antd";
import { RowBody } from "./App.styles";
import Review from "./Components/Review/review";
import Steps from "./Components/Steps/steps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadQuantities,
  loadSelectedColors,
} from "./Store/Reducers/cameraSlice";
import { loadPlanType } from "./Store/Reducers/planSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedSystem = localStorage.getItem("savedSystem");

      if (savedSystem) {
        const data = JSON.parse(savedSystem);

        dispatch(loadQuantities(data.quantities ?? {}));
        dispatch(loadSelectedColors(data.selectedColor ?? {}));
        dispatch(loadPlanType(data.planType ?? ""));
      }
    } catch (error) {
      console.error("Failed to restore saved system:", error);
    }
  }, [dispatch]);

  return (
    <RowBody gutter={24} style={{ margin: 0 }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={16}>
        <div>
          <Steps />
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <div>
          <Review />
        </div>
      </Col>
    </RowBody>
  );
}

export default App;
