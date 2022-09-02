/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import styled from "styled-components";
import BasicAnimation from "./components/BasicAnimation";
import Click4Box from "./components/Click4Box";
import MotionValues from "./components/MotionValues";
import MotionValues2 from "./components/MotionValues2";
import Slider from "./components/Slider";
import SVG_Animation from "./components/SVG_Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import AnimatePresenc from "./components/AnimatePresenc";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 30vh;
  gap: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [num, setNum] = useState(0);
  return (
    <Wrapper>
      {num === 0 ? (
        <BtnContainer>
          <button onClick={() => setNum(1)}>잠시 후 박스 나타남</button>
          <button onClick={() => setNum(2)}>
            잠시 후 네모에 원 4개 나타남
          </button>
          <button onClick={() => setNum(3)}>
            next 또는 prev 버튼을 눌러서 좌우 이동
          </button>
          <button onClick={() => setNum(4)}>
            AirBnB로고가 시간에 따라 점점 색이 채워짐
          </button>
          <button onClick={() => setNum(5)}>
            좌, 우로 드래그시 크기가 변함
          </button>
          <button onClick={() => setNum(6)}>
            위, 아래로 스크롤 시 크기가 변함
          </button>
          <button onClick={() => setNum(7)}>
            가운데 박스를 드래그시 색, 위치 변함
          </button>
          <button onClick={() => setNum(8)}>버튼을 누르면 박스가 나타남</button>
          <button onClick={() => setNum(9)}>
            4개의 박스중 하나를 클릭해서 화면 중앙으로 가져오기
          </button>
        </BtnContainer>
      ) : null}
      {num === 1 ? <BasicAnimation /> : null}
      {num === 2 ? <Variants /> : null}
      {num === 3 ? <Slider /> : null}
      {num === 4 ? <SVG_Animation /> : null}
      {num === 5 ? <MotionValues /> : null}
      {num === 6 ? <MotionValues2 /> : null}
      {num === 7 ? <Gestures /> : null}
      {num === 8 ? <AnimatePresenc /> : null}
      {num === 9 ? <Click4Box /> : null}
    </Wrapper>
  );
}

export default App;
