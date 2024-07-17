import { createSlice } from '@reduxjs/toolkit';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const initialState = {
  elements: [],
};

const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addElement: (state) => {
      state.elements.unshift({ color: getRandomColor() });
    },
    removeElement: (state) => {
      state.elements.pop();
    },
  },
});

export const { addElement, removeElement } = elementsSlice.actions;
export default elementsSlice.reducer;
