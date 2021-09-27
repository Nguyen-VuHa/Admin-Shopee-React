const { default: axiosClient } = require("./clientAxios");

const productApi = {
    getAllProduct: () => {
        const url =`/api/product`;
        return axiosClient.get(url);
    },
    newProduct: (data) => {
        const url =`/api/product/new-product`;
        return axiosClient.post(url, data);
    }
}

export default productApi;