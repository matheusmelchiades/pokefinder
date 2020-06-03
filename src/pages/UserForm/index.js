import React, { useEffect, createRef } from 'react';

import Icon from '../../components/Icon';
import Input from '../../components/Inputs/Standard';
import * as Storage from '../../services/storage';

import { Container, Header, Content, Footer, Title, Info, IconButton } from './styles';

export default function UserForm({ history }) {
  const inputRef = createRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSubmit = () => {
    const user = 'user';
    const cacheUser = Storage.load(user);

    if (cacheUser && cacheUser.perfil) {
      return history.push('/finder', { user });
    }

    Storage.save(user);

    return history.push('/form/perfil', { user });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      return handleSubmit();
    }
  };

  return (
    <Container>
      <Header>
        <Title>Let's meet each other first?</Title>
      </Header>
      <Content>
        <Info>First we need to know your name...</Info>
        <Input ref={inputRef} onKeyPress={onKeyPress} />
      </Content>
      <Footer>
        <IconButton onClick={handleSubmit}>
          <Icon name="next" size="large" />
        </IconButton>
      </Footer>
    </Container>
  );
}
