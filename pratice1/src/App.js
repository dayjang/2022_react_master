import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Boxone = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Boxtwo = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Boxone />
      <Boxtwo />
    </Father>
  );
}

export default App;
