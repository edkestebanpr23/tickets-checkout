import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Checkout from './pages/checkout';
import HeaderNav from './components/organism/header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/mui';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HeaderNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  </ThemeProvider>
);

export default App;
