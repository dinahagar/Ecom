import { Col } from "antd";
import { RowBody } from "./App.styles";
import Steps from "./Components/Steps/steps";

function App() {
  return (
    <RowBody gutter={24} style={{ margin: 0 }}>
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <div>
          <Steps />
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <div style={{ border: "1px solid" }}>Content</div>
      </Col>
    </RowBody>
  );
}

export default App;
