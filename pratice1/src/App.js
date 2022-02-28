import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
  width: 100px;
`;

const Input = styled.input.attrs({ required: true, minLength: 7 })`
  background-color: red;
`;

function App() {
  return (
    <Father>
      <Btn>CLick!</Btn>
      <Btn as="a" href="/">
        link
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
