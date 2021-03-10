import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 50px;
  background-color: ${props => props.theme.grayLight};
  display: flex;
  align-items: center;
  justify-content: center;
`
const SpanLogo = styled.span`
  color: ${props => props.theme.red};
`

export const Footer = () => {
  return (
    <FooterContainer>
      <SpanLogo><strong>netflix</strong>roulette</SpanLogo>
    </FooterContainer>
  )
}
