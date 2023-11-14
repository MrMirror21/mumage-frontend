import { atom, selector } from "recoil";

export const page = atom({
    key: "pageNumState",
    default: 1,
});

export const isfollowing = atom({
    key: "isfollowing",
    default: true,
});


export const getDataSelector = selector({
    key: 'imgData/get',
    get: async ({ get }) => {
        const dataFollowing = await (await fetch('https://picsum.photos/v2/list?page=1&limit=100')).json();
        const dataRecommend = await (await fetch('https://picsum.photos/v2/list?page=3&limit=100')).json();
        return [dataFollowing, dataRecommend];
    }
})

export const getSavedProfileImage = atom({
    key: "UserProfileImage",
    default: "",
});

