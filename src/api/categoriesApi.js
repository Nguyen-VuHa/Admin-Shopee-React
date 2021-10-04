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
    updateCategory: (data) => {
        const url =`api/category/update-category`;
        return axiosClient.post(url, JSON.stringify(data));
    },
    removeCategory: (idCategory) => {
        const url =`api/category/delete/${idCategory}`;
        return axiosClient.get(url);
    },
    getByIdCategory: (idCategory) => {
        const url =`api/category/${idCategory}`;
        return axiosClient.get(url);
    },
}

export default categoriesApi;