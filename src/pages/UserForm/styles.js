import styled from 'styled-components';

import devices from '../../styles/devices';

import BackgroundScreen from '../../assets/background/bg.png';
import BackgroundPlus from '../../assets/background/Plus.png';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${BackgroundScreen});

  @media ${devices.desktop} {
    background: url(${BackgroundPlus});
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 17%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Content = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;

  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const IconButton = styled.div`
  :active {
    transform: translate(-2px, 4px);
  }
`;
