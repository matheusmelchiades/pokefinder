import styled from 'styled-components';

import devices from '../../styles/devices';

import BackgroundScreen from '../../assets/background/bg.png';
import BackgroundPlus from '../../assets/background/Plus.png';

import PokemonLogoImage from '../../assets/pokemon-logo/pokemon-logo@2x.png';
import FinderLogoImage from '../../assets/finder/finder@2x.png';
import PikachuImage from '../../assets/pikachu/pikachu@3x.png';

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

  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Content = styled.div`
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 18%;
  padding-right: 18%;
  padding-bottom: 10%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const PokemonLogo = styled.img.attrs({
  src: PokemonLogoImage,
})`
  width: 100%;
`;

export const FinderLogo = styled.img.attrs({
  src: FinderLogoImage,
})`
  width: 50%;
`;

export const Pikachu = styled.img.attrs({
  src: PikachuImage,
})`
  width: 60%;
`;
