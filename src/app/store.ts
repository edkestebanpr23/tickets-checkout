import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../features/ticket/ticketSlice';

export const store = configureStore({
  reducer: {
    tickets: reducer
  }
});
