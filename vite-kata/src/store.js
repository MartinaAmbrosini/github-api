import { reactive } from "vue";

export const store = reactive({
    repoList: [],
    repoApiURL: "https://api.github.com/search/repositories",
    searchText: "",
    user_orgList: [],
    user_orgApiURL: "https://api.github.com/search/users",
    searchOption: "",
});