import React, { useRef } from 'react';

import { Container, ButtonScroll, ButtonIcon } from './styles';

const SCROLL_SIZE = 450;

export default function HorizontalScroll({ children, ...props }) {
  const scrollRef = useRef(null);

  const forceScroll = (side) => {
    if (scrollRef.current) {
      if (side === 'left') {
        scrollRef.current.scrollLeft -= SCROLL_SIZE;
      }

      if (side === 'right') {
        scrollRef.current.scrollLeft += SCROLL_SIZE;
      }
    }
  };

  return (
    <Container ref={scrollRef} {...props}>
      <ButtonScroll side="left" onClick={() => forceScroll('left')}>
        <ButtonIcon side="left" />
      </ButtonScroll>

      {children}

      <ButtonScroll side="right" onClick={() => forceScroll('right')}>
        <ButtonIcon side="right" />
      </ButtonScroll>
    </Container>
  );
}
