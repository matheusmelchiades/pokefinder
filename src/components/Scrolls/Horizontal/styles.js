import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonScroll = styled.button`
  position: absolute;
  right: ${({ side }) => (side && side === 'right' ? 0 : '')};
  left: ${({ side }) => (side && side === 'left' ? 0 : '')};
  margin-left: ${({ side }) => (side && side === 'left' ? '5px' : '')};
  margin-right: ${({ side }) => (side && side === 'right' ? '5px' : '')};
`;
