import { atom, selector } from "recoil";
import { users, posts } from "../store/ServerData";

export const index = atom({
    key: "indexPage",
    default: 1,
})

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
});

export const second = atom({
    key: "second/favorite",
    default: "",
});

export const third = atom({
    key: "third/favorite",
    default: "",
});

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

export const userInfo = atom({
    key: "user",
    default: {},
})


export const getSavedFileImage = atom({
    key: "UploadedFile",
    default: "",
});

export const usersState = atom({
    key: "usersState",
    default: users,
});

export const postsState = atom({
    key: "postsState",
    default: posts,
});

export const postsFilterState = atom({
    key: "postsFilterState",
    default: "Show All",
});

export const filteredPostsState = selector({
    key: "filteredPostsState",
    get: async ({ get }) => {
        const filter = get(postsFilterState);
        const list = get(postsState);
        const user = get(userInfo);
        switch (filter) {
            case 'Following':
                const ll = list.filter((post) => {
                    let ok = false;
                    for (var i = 0; i < user["follows"].length; i++) {
                        if (user["follows"][i]["followId"] === post["userId"]) {
                            ok = true;
                        }
                    }
                    return ok;
                });
                return ll;
            case 'Recommend':
                return list.filter((post) => {
                    return post["userId"] !== user["userId"];
                });
            default:
                return list;
        }
    }
});



