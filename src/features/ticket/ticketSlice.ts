import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TicketInterface } from '../../interface/ticket';

export interface State {
    category: string;
    subcategory: string;
    ticket?: TicketInterface
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    category: '',
    subcategory: '',
    ticket: {}
  } as State,
  reducers: {
    setCategory(state: State, { payload: category }: PayloadAction<string>) {
      state.category = category;
    },
    setSubcategory(state: State, { payload: subcategory }: PayloadAction<string>) {
      state.subcategory = subcategory;
    }
  }
});

export const { reducer } = ticketSlice;
export const { setCategory, setSubcategory } = ticketSlice.actions;
