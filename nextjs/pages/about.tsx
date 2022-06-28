import styled from "@emotion/styled";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const About = () => {
  return (
    <div>
      About
      <Box />
    </div>
  )
}

export default About;