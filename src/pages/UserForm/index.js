import React, { useEffect, createRef } from 'react';

import Icon from '../../components/Icon';
import Input from '../../components/Inputs/Standard';

import { Container, Header, Content, Footer, Title, Info, IconButton } from './styles';

export default function UserForm({ history }) {
  const inputRef = createRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Container>
      <Header>
        <Title>Let's meet each other first?</Title>
      </Header>
      <Content>
        <Info>First we need to know your name...</Info>
        <Input ref={inputRef} />
      </Content>
      <Footer>
        <IconButton onClick={() => history.push('/form/perfil')}>
          <Icon name="next" size="large" />
        </IconButton>
      </Footer>
    </Container>
  );
}
