import React from 'react';

import { Container, ButtonScroll } from './styles';

const DESKTOP_SIZE = 500;

export default function index({ children, ...props }) {
  const isDesktop = window.innerWidth > DESKTOP_SIZE;

  return (
    <Container {...props}>
      {isDesktop && (
        <ButtonScroll side="left">
          <p>LEFT</p>
        </ButtonScroll>
      )}

      {children}

      {isDesktop && (
        <ButtonScroll side="right">
          <p>RIGHT</p>
        </ButtonScroll>
      )}
    </Container>
  );
}
