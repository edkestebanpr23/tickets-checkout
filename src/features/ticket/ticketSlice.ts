import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    category: string;
    subcategory: string;
    event?: string;
    palco?: string;
    palcoPrice?: number;
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    category: '',
    subcategory: '',
    event: '',
    palco: '',
    palcoPrice: 0
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
    },
    setPalco(state: State, { payload: palco }: PayloadAction<string>) {
      state.palco = palco;
    },
    setPalcoPrice(state: State, { payload: palcoPrice }: PayloadAction<number>) {
      state.palcoPrice = palcoPrice;
    }
  }
});

export const { reducer } = ticketSlice;
export const {
  setCategory, setSubcategory, setEvent, setPalco, setPalcoPrice
} = ticketSlice.actions;
