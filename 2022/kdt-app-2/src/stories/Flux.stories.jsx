import Flux from "../components/Flux";

const { Row, Col } = Flux;

export default {
  title: 'Component/Flux',
  component: Flux
};

const Box = () => {
  return (
    <div style={{ 
      backgroundColor: '#44b', 
      width: '100%',
      height: 20,
      color: 'white',
      textAlign: 'center',
      borderRadius: 6
    }}>
      Box
    </div>
  )
}

export const Default = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={4}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col span={4}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col span={4}><Box /></Col>
      <Col span={2}><Box /></Col>
      <Col offset={4} span={2}><Box /></Col>
    </Row>
  )
};