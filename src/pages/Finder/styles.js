import styled, { keyframes } from 'styled-components';

import HorizontalScroll from '../../components/Scrolls/Horizontal';
import Icon from '../../components/Icon';
import InputComponent from '../../components/Inputs/Outlined';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: white;
`;

/**
 * HEADER
 */
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--color-green-light);

  height: 10%;
  width: 100%;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
  margin-right: 5%;
`;

export const Title = styled.h2``;

export const SearchInput = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-top: 15px;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  animation: ${({ open }) => (open ? showInputIn : showInputOut)} 1s linear;
  transition: visibility 1s linear;
`;

export const Input = styled(InputComponent)`
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  padding-top: 15px;
`;

/**
 * POKEMON TYPES
 */
export const HorizontalList = styled(HorizontalScroll)`
  div:first-child {
    margin-left: 0px;
  }
`;

export const TypeComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  background: ${({ selected }) => (!!selected ? 'var(--color-green-light)' : '')};
  border-radius: 10px;
  padding: 15px;
`;

export const TypeAvatar = styled.img`
  width: 80px;
  height: 80px;
`;

export const TypeName = styled.h3`
  color: ${({ selected }) => (!!selected ? 'white' : 'var(--color-black)')};
  font-weight: bold;
  text-transform: capitalize;
  font-size: 20px;
`;

/**
 * POKEMON LIST
 */
export const PokemonListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 15px;
  padding-right: 15px;
  margin-top: 3%;
`;

export const PokemonHeaderLabel = styled.p`
  color: var(--color-black);
  font-size: 16px;
  opacity: 0.7;
`;

export const LineDivisor = styled.div`
  width: 95%;
  margin-top: 15px;
  align-self: center;
  border: 0.33333px solid rgba(150, 150, 150, 0.1);
`;

export const PokemonList = styled.div`
  height: 70%;
  overflow: auto;
`;

export const PokemonListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 0px;
  border-bottom: 0.3px solid rgba(150, 150, 150, 0.5);
`;

export const PokemonAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 15px;
`;

export const PokemonAbout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonName = styled.p`
  margin-left: 10px;
  font-size: 20px;
  color: var(--color-black);
  text-transform: capitalize;
`;

export const FilterIcon = styled(Icon).attrs({
  name: 'arrow',
})`
  margin-left: 15px;
  transform: rotate(${({ orderNames }) => (orderNames ? 180 : 0)}deg);
`;

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
  size: 'smallMedium',
})`
  :active {
    transform: translate(-0.4px, 2px);
  }
`;

/**
 * INPUT ANIMATIONS
 */
const showInputIn = keyframes`
    from {
        opacity: 0;
        width: 0;
    }

    to {
        opacity: 1;
        width: 100%;
    }
`;

const showInputOut = keyframes`
    from {
        opacity: 1;
        width: 100%;
    }

    to {
        opacity: 0;
        width: 0;
    }
`;
