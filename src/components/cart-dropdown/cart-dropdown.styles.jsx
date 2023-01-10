// STYLED COMPONENT
import styled from "styled-components";

// OTHER COMPONENTS
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from "../button/button.styles";


// MY STYLED COMPONENT
export const CartDropdownContainerStyled = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      margin-top: auto;
  }
`;

export const EmptyMessageStyled = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;