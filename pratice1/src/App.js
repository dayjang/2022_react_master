import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotationAnime = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 100px;
}

50% {
  transform: rotate(180deg);
  border-radius: 10px;
}
100% {
  transform: rotate(0deg);
  border-radius: 100px;
} 
`;
const Title = styled.h1`
  font-size: 20px;
  color: gray;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: tomato;
  animation: ${rotationAnime} 3s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }

  ${Title}:hover {
    font-size: 100px;
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <span>🤯</span>
        <Title>yup!! </Title>
      </Box>
      <Title>HAHA</Title>
    </Father>
  );
}

export default App;
