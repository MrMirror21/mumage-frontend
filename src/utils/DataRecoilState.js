import { atom } from 'recoil';

export const currentPageState = atom({
  key: 'currentPageState', 
  default: 1,
});

export const sectionValueState = atom({
  key: 'sectionValueState',
  default: '종합',
});

export const selectBoxValueState = atom({
  key: 'selectBoxValueState',
  default: '종합',
})