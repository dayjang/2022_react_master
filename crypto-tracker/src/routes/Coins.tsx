import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
`;

const Header = styled.header`
height: 15vh
display: flex;
justify-content: center;
align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.3s ease-in;
    display: block;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  in_new: boolean;
  is_active: boolean;
  typle: string;
}

function Coins() {
  const [loading, setLoading] = useState(true);

  return (
    <Container>
      <Header>
        <Title>C O I N YAY </Title>
      </Header>
      <CoinList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            {coin.name} {coin.symbol}
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
