import { atom } from 'recoil';

export const currentPageState = atom({
  key: 'currentPageState', 
  default: 1,
});

export const sectionValueState = atom({
  key: 'sectionValueState',
  default: 'k-pop',
});

export const selectBoxValueState = atom({
  key: 'selectBoxValueState',
  default: 'k-pop',
})

export const orderState = atom({
  key: 'orderState',
  default: 'default',
})