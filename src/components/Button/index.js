import React from 'react';

import { Container, Label } from './styles';

export default function Button({ label = '', onClick, ...props }) {
  return (
    <Container onClick={onClick} {...props}>
      <Label>{label}</Label>
    </Container>
  );
}
