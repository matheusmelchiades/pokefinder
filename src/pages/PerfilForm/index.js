import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Icon from '../../components/Icon';
import Input from '../../components/Inputs/Standard';
import BottomModal from '../../components/Modals/Bottom';

import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  Info,
  IconButton,
  TitleModal,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ListType,
  RowType,
  TypeAvatar,
  TypeName,
  LineDivisor,
  RowTypeContent,
  RowTypeAction,
  ConfirmButton,
} from './styles';

export default function PerfilForm({ history }) {
  const [favoriteType, setFavoriteType] = useState(null);
  const [types, setTypes] = useState([]);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    api
      .get('/types')
      .then((res) => res.data)
      .then((data) => data.map((item) => ({ ...item, selected: false })))
      .then((data) => setTypes(data || []))
      .catch((err) => console.log('Error to get types!'));
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setOpenModal((prev) => !prev);
    }
  };

  const submit = () => {
    if (!favoriteType || !favoriteType?.name) return;

    history.push('/finder');
  };

  return (
    <>
      <BottomModal open={openModal}>
        <ModalHeader>
          <TitleModal>Select your favorite pokémon type</TitleModal>
          <IconButton onClick={() => setOpenModal(false)}>
            <Icon name="close" size="medium" />
          </IconButton>
        </ModalHeader>

        <LineDivisor />

        <ModalContent>
          <ListType>
            {types.map((pokemonType, index) => (
              <RowType key={index}>
                <RowTypeContent>
                  <TypeAvatar src={pokemonType.thumbnailImage} />
                  <TypeName>{pokemonType.name}</TypeName>
                </RowTypeContent>

                <RowTypeAction>
                  <IconButton onClick={() => setFavoriteType(pokemonType)}>
                    {favoriteType?.name === pokemonType.name ? <Icon name="radio-on" size="medium" /> : <Icon name="radio-off" size="medium" />}
                  </IconButton>
                </RowTypeAction>
              </RowType>
            ))}
          </ListType>
        </ModalContent>

        <ModalFooter>
          <ConfirmButton label="Confirm" onClick={submit} />
        </ModalFooter>
      </BottomModal>

      <Container>
        <Header>
          <IconButton onClick={() => history.goBack()}>
            <Icon name="semi-arrow" size="medium" />
          </IconButton>
          <Title>Hello, trainer Dev!</Title>
        </Header>
        <Content>
          <Info>...now tell us wich is your favorite Pokémon type:</Info>
          <Input onKeyPress={handleKeyPress} />
        </Content>
        <Footer>
          <IconButton onClick={() => history.push('/finder')}>
            <Icon name="next" size="large" />
          </IconButton>
        </Footer>
      </Container>
    </>
  );
}
