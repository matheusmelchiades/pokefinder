import styled from 'styled-components';

import devices from '../../styles/devices';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import BottomModal from '../../components/Modals/Bottom';

import BackgroundScreen from '../../assets/background/bg.png';
import BackgroundPlus from '../../assets/background/Plus.png';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${BackgroundScreen});

  @media ${devices.laptopLarge} {
    background: url(${BackgroundPlus});
  }
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;

  @media ${devices.laptopLarge} {
    padding-top: 2.5%;
    padding-left: 30%;
    padding-right: 30%;
    padding-bottom: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;

  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;

  @media ${devices.laptopLarge} {
    padding-top: 0%;
    padding-left: 30%;
    padding-right: 30%;
  }
`;

export const Selectable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 18px;

  width: 100%;
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

export const SelectableText = styled.p`
  font-size: 24px;
  text-transform: capitalize;
`;

export const SelectableIcon = styled(Icon).attrs({
  name: 'semi-arrow',
  size: 'smallMedium',
})`
  transform: rotate(270deg);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media ${devices.laptopLarge} {
    margin-top: -15%;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    transform: translate(-2px, 4px);
  }
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
`;

/**
 * MODAL
 */
export const Modal = styled(BottomModal)`
  @media ${devices.laptopLarge} {
    width: 60%;
    margin: 0 auto;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`;

export const LineDivisor = styled.div`
  margin-top: 15px;
  border: 0.33333px solid rgba(150, 150, 150, 0.1);
`;

export const ListType = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;

  li:first-child {
    margin-top: 10px;
  }
`;

export const RowType = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const RowTypeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RowTypeAction = styled.div`
  display: flex;
  align-items: center;
`;

export const TypeAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const TypeName = styled.h2`
  font-size: 20px;
  font-weight: 400px;
  color: var(--color-black);
  margin-left: 20px;
  text-transform: capitalize;
`;

export const TitleModal = styled.h3`
  color: var(--color-black);
  font-size: 20px;
`;
