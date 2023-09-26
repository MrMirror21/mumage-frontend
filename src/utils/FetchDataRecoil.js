import { atom, selector } from "recoil";

export const data1 = atom({
    key: 'imgDataFollowing',
    default: [],
});

export const data2 = atom({
    key: 'imgDataRecommend',
    default: [],
})

const getDataSelector = selector({
    key: 'imgData/get',
    get: async ({get}) => {
        const dataFollowing = await(await fetch('https://picsum.photos/v2/list?page=1&limit=100')).json();
        const dataRecommend = await(await fetch('https://picsum.photos/v2/list?page=3&limit=100')).json();
        return [dataFollowing, dataRecommend];
    }
})

export default getDataSelector;
