import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Checkout from './pages/checkout';
import EventInfo from './pages/event';
import HeaderNav from './components/organism/header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/mui';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HeaderNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="event" element={<EventInfo />} />
    </Routes>
  </ThemeProvider>
);

export default App;
