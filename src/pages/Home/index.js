import React from 'react';

import Button from '../../components/Button';

import { Container, Header, Content, Footer, PokemonLogo, FinderLogo, Pikachu } from './styles';

export default function Home({ history }) {
  return (
    <Container>
      <Header>
        <PokemonLogo />
        <FinderLogo />
      </Header>

      <Content>
        <Button
          label="Let's go!"
          onClick={() => {
            history.push('/form/user');
          }}
        />
      </Content>

      <Footer>
        <Pikachu />
      </Footer>
    </Container>
  );
}
