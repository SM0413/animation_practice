import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValues() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-700, 0, 700], [2, 1, 0.1]);
  useEffect(() => {
    potato.onChange(() => console.log(potato.get()));
  });
  return (
    <Wrapper>
      <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues;
