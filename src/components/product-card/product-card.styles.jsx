// STYLED COMPONENT
import styled from "styled-components";

// OTHER COMPONENTS
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from "../button/button.styles";


// MY STYLED COMPONENT
export const ImgProductCardStyled = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ImgProductCardStyled} {
      opacity: 0.8;
    }
 
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const NameProductCardStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceProductCardStyled = styled.span`
  width: 10%;
`;

export const FooterProductCardStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;