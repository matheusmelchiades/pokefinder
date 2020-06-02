import styled from 'styled-components';

export const Container = styled.input`
  padding: 5px 0;
  border: 0;
  border-bottom: solid 2px white;
  background: none;

  font-size: 18px;
  font-weight: 500;
  text-align: start;
  color: white;

  :focus {
    outline: 0;
    border-bottom: solid 3.4px white;
  }

  :hover {
    border-bottom: solid 3.4px white;
  }
`;
