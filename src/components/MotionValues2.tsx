import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
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

function MotionValues2() {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-700, 700], [-360, 360]);
  const gradient = useTransform(
    x,
    [-700, 0, 700],
    [
      "linear-gradient(135deg, hsl(196.1344537815126, 100%, 46.666666666666664%), hsl(257.89915966386553, 100%, 46.666666666666664%))",
      "linear-gradient(135deg, hsl(321.42857142857144, 100%, 46.666666666666664%), hsl(295.7142857142857, 100%, 46.666666666666664%))",
      "linear-gradient(135deg, hsl(132.10084033613447, 100%, 46.666666666666664%), hsl(72.10084033613445, 100%, 46.666666666666664%))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateY, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default MotionValues2;
