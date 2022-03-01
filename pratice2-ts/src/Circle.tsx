import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

interface IContainer {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<IContainer>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};

  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

interface ICircle {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: ICircle) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

interface IPlayer {
  name: string;
  age: number;
}
const sayHello = (playerObj: IPlayer) =>
  `Hello ${playerObj.name}! you are ${playerObj.age} years old`;

sayHello({ name: "didi", age: 22 });
