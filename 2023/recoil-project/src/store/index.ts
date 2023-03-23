import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const charState = selector({
  key: 'charState',
  get: ({ get }) => {
    const text = get(textState);
    const length = text.length;
    return length;
  },
});
