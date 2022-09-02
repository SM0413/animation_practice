import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => setIsClicked((prev) => !prev);
  const [whatBox, setBox] = useState(0);
  return (
    <Wrapper>
      <Grid>
        <Box layoutId="Hello" onClick={toggleClicked} />
        <Box onClick={toggleClicked} />
        <Box onClick={toggleClicked} />
        <Box onClick={toggleClicked} />
      </Grid>
      <AnimatePresence>
        {isClicked ? (
          <Overlay
            onClick={toggleClicked}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId="Hello" style={{ width: 500, height: 300 }} />
          </Overlay>
        ) : null}{" "}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
