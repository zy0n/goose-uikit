import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  background: ${({ theme }) => theme.card.cardHeaderBackground};
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
