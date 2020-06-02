import React from 'react';

import Routes from '../routes';
import GlobalStyle from '../styles/global';
import SettingsStyle from '../styles/settings';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SettingsStyle />
      <Routes />
    </>
  );
}
