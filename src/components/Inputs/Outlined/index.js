import React, { forwardRef } from 'react';

import { Container } from './styles';

export default forwardRef((props, ref) => {
  return <Container ref={ref} {...props} />;
});
