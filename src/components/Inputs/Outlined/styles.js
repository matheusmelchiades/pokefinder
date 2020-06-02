import styled from 'styled-components';

export const Container = styled.input`
  border: 0;
  padding: 8px 0px;
  outline: -webkit-focus-ring-color auto 1px;
  outline-color: rgba(0, 0, 0, 0.3);
  background: #f0f0f0;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);

  :focus {
    outline-color: rgba(0, 0, 0, 0.6);
  }
`;
