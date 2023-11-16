import { atom, selector } from "recoil";

export const page = atom({
    key: "pageNumState",
    default: 1,
});

export const isfollowing = atom({
    key: "isfollowing",
    default: true,
});

export const first = atom({
    key: "first/favorite",
    default: "",
})

export const second = atom({
    key: "second/favorite",
    default: "",
})
export const third = atom({
    key: "third/favorite",
    default: "",
})

export const getDataSelector = selector({
    key: 'imgData/get',
    get: async ({ get }) => {
        const dataFollowing = await (await fetch('https://picsum.photos/v2/list?page=1&limit=100')).json();
        const dataRecommend = await (await fetch('https://picsum.photos/v2/list?page=3&limit=100')).json();
        return [dataFollowing, dataRecommend];
    }
})

export const getFavoriteGenre = selector({
    key: 'favGenres',
    get: ({ get }) => {
        return [get(first), get(second), get(third)]
    },
    set: ({ set }, newGenres) => {
        set(first, newGenres[0]);
        set(second, newGenres[1]);
        set(third, newGenres[2]);
    }
})

export const getSavedProfileImage = atom({
    key: "UserProfileImage",
    default: "",
});

export const getSavedFileImage = atom({
    key: "UploadedFile",
    default: "",
}
)
