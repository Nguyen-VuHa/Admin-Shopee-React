const { default: axiosClient } = require("./clientAxios");

const categoriesApi = {
    getAllCategory: () => {
        const url =`/api/category`;
        return axiosClient.get(url);
    },
    newCategory: (data) => {
        const url =`api/category/new-category`;
        return axiosClient.post(url, JSON.stringify(data));
    },
}

export default categoriesApi;