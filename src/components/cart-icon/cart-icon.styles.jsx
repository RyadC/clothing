// STYLED COMPONENT
import styled from "styled-components";

// COMPONENTS
import { ReactComponent as ShoppingSVG } from "../../assets/shopping-bag.svg";

// MY STYLED COMPONENT
export const ShoppingIconStyled = styled(ShoppingSVG)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainerStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCountStyled = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
