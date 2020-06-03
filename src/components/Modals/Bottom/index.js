import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

export default function ModalBottom({ open = false, children, ...props }) {
  const [life, setLife] = useState(false);

  useEffect(() => {
    setLife((prev) => {
      if (prev && !open) {
        setTimeout(() => {
          setLife(false);
        }, 1000);
      }

      return true;
    });
  }, [open]);

  return (
    <Container open={open}>
      <Content open={open} {...props}>
        {life && children}
      </Content>
    </Container>
  );
}
