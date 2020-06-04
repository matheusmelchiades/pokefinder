import React, { useState, useEffect, createRef, useRef } from 'react';
import api from '../../services/api';
import * as helper from '../../helper/handlerArray';
import * as storage from '../../services/storage';

import {
  Container,
  Header,
  HeaderTitle,
  Title,
  SearchInput,
  HorizontalList,
  TypeAvatar,
  TypeComponent,
  TypeName,
  PokemonListRow,
  PokemonList,
  PokemonHeaderLabel,
  PokemonListHeader,
  LineDivisor,
  PokemonName,
  PokemonAvatar,
  FilterIcon,
  PokemonAbout,
  Input,
  SearchIcon,
  SearchButton,
} from './styles';

const LIMIT = 100;

export default function Finder() {
  const inputRef = createRef();
  const listPokRef = useRef();
  const [cache, setCache] = useState([]);
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [orderNames, setOrderNames] = useState();
  const [showInput, setShowInput] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  // CONSUME DATA FROM API
  useEffect(() => {
    api
      .get(`/pokemons?_page=1&_limit=${LIMIT}`)
      .then((res) => res.data)
      .then((data) => {
        setCache(data);
        return data;
      })
      .then((data) => setPokemons(data || []))
      .catch((err) => console.log(err));

    api
      .get('/types')
      .then((res) => res.data)
      .then((data) => {
        const cacheUser = storage.load('user');

        if (cacheUser && cacheUser.perfil) {
          const filtred = data.filter((pokType) => {
            return pokType.name !== cacheUser.perfil.name;
          });

          setCurrentType(cacheUser.perfil);
          setTypes([cacheUser.perfil, ...filtred]);
        } else {
          setTypes(data || []);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // ORDER POKEMONS BY NAME
  useEffect(() => {
    setPokemons((pokemosState) => {
      return pokemosState.sort((...params) =>
        !orderNames
          ? helper.sortAscByField('name', ...params)
          : helper.sortDescByField('name', ...params)
      );
    });
  }, [orderNames]);

  // FILTER POKEMONS BY TYPE
  useEffect(() => {
    if (currentType && currentType.name) {
      const data = cache.filter((pok) => pok.type.includes(currentType.name));

      setPokemons(data);
    }
  }, [currentType, cache]);

  const handleSearch = (event) => {
    const { value } = event.target;
    let data = cache;

    if (currentType && currentType.name) {
      data = data.filter((pok) => pok.type.includes(currentType.name));
    }

    if (value) {
      data = data.filter((pok) => {
        return pok.name.toLowerCase().includes(value.toLowerCase());
      });

      setPokemons(data);
    } else {
      setPokemons(data);
    }
  };

  const changeType = (pokType) => {
    const cacheUser = storage.load('user');

    if (pokType?.name === currentType?.name) {
      setCurrentType(null);
      return setPokemons(cache);
    }

    storage.save('user', {
      ...cacheUser,
      perfil: pokType,
    });

    setCurrentType(pokType);
  };

  const onScroll = async () => {
    if (!listPokRef.current) return;

    const { scrollTop, scrollHeight, offsetHeight } = listPokRef?.current;
    const final = scrollHeight - offsetHeight;
    const beforeFinal = Math.round(final - final * 0.35);

    if (scrollTop === beforeFinal || scrollTop === final) {
      try {
        const response = await api.get(`/pokemons?_page=${page}&_limit=${LIMIT}`);

        if (response.status !== 200) return;

        setPokemons([...pokemons, ...response.data]);
        setCache([...cache, ...response.data]);
        setPage(page + 1);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Header>
        {!showInput ? (
          <HeaderTitle>
            <SearchButton onClick={() => setShowInput(!showInput)}>
              <SearchIcon />
            </SearchButton>

            <Title>Pokémon Finder</Title>
          </HeaderTitle>
        ) : (
          <SearchInput open={showInput}>
            <Input ref={inputRef} placeholder="Search" onChange={handleSearch} />
          </SearchInput>
        )}
      </Header>
      <HorizontalList>
        {types.map((pokType) => (
          <TypeComponent
            key={pokType.name}
            selected={currentType?.name === pokType.name}
            onClick={() => changeType(pokType)}
          >
            <TypeAvatar src={pokType.thumbnailImage} />
            <TypeName selected={currentType?.name === pokType.name}>{pokType.name}</TypeName>
          </TypeComponent>
        ))}
      </HorizontalList>

      <PokemonListHeader>
        <PokemonHeaderLabel>Pokémon</PokemonHeaderLabel>

        <PokemonAbout onClick={() => setOrderNames(!orderNames)}>
          <PokemonHeaderLabel>Name</PokemonHeaderLabel>

          <FilterIcon name="arrow" orderNames={orderNames} />
        </PokemonAbout>
      </PokemonListHeader>

      <LineDivisor />

      <PokemonList ref={listPokRef} onScroll={onScroll}>
        {pokemons.map((pokemon, index) => (
          <PokemonListRow key={index}>
            <PokemonAvatar src={pokemon.thumbnailImage} />
            <PokemonName>{pokemon.name}</PokemonName>
          </PokemonListRow>
        ))}
      </PokemonList>
    </Container>
  );
}
