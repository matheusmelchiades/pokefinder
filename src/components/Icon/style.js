import styled from 'styled-components';

const SIZE_MAP = {
  small: 16,
  smallMedium: 24,
  medium: 32,
  large: 64,
  default: 16,
};

export const Container = styled.img`
  width: ${({ size }) => SIZE_MAP[size || 'default']}px;
  height: ${({ size }) => SIZE_MAP[size || 'default']}px;
`;
