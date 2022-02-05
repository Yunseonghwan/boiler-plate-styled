import styled from "styled-components";
import { ICard } from "./Card.interface";

const Card: React.FC<ICard.IProps> = () => {
  return <Container>Card</Container>;
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

export default Card;
