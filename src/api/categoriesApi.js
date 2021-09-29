const { default: axiosClient } = require("./clientAxios");

const categoriesApi = {
    getAllCategory: () => {
        const url =`/api/category`;
        return axiosClient.get(url);
    },
}

export default categoriesApi;