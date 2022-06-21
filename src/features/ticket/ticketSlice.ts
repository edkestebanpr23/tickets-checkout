import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    category: string;
    subcategory: string;
    event?: string;
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
    },
    setEvent(state: State, { payload: event }: PayloadAction<string>) {
      state.event = event;
    }
  }
});

export const { reducer } = ticketSlice;
export const { setCategory, setSubcategory, setEvent } = ticketSlice.actions;
