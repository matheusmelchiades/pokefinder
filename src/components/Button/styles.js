import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;

  border: 0;
  margin: 0;
  outline: 0;

  min-height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: var(--color-pink);

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  padding: 2px 20px;

  :active {
    transform: translate(-0.4px, 2px);
  }
`;

export const Label = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.45;
`;
