import styled from 'styled-components';

import devices from '../../../styles/devices';
import Icon from '../../Icon';

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  overflow-x: scroll;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;

  @media ${devices.laptopLarge} {
    padding-left: 5%;
  }
`;

export const ButtonScroll = styled.button`
  position: fixed;
  right: ${({ side }) => (side && side === 'right' ? 0 : '')};
  left: ${({ side }) => (side && side === 'left' ? 0 : '')};
  margin-left: ${({ side }) => (side && side === 'left' ? '5px' : '')};
  margin-right: ${({ side }) => (side && side === 'right' ? '5px' : '')};

  background: var(--color-green-light);
  border-radius: 50px;
  padding: 10px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  border: 0;
  margin: 0;
  outline: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(${({ side }) => (side === 'right' ? 180 : 0)}deg);

  margin-left: ${({ side }) => (side === 'left' ? 20 : 0)}px;
  margin-right: ${({ side }) => (side === 'right' ? 20 : 0)}px;

  :active {
    transform: translate(-4px, 4px);
  }

  visibility: hidden;

  @media ${devices.laptopLarge} {
    visibility: visible;
  }
`;

export const ButtonIcon = styled(Icon).attrs({
  name: 'semi-arrow',
  size: 'smallMedium',
})`
  margin-left: ${({ side }) => (side === 'left' ? -2 : 0)}px;
  margin-right: ${({ side }) => (side === 'right' ? 2 : 0)}px;
`;
