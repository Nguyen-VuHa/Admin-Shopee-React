const { default: axiosClient } = require("./clientAxios");

const productApi = {
    getAllProduct: () => {
        const url =`/api/product`;
        return axiosClient.get(url);
    },
    getProductById: (idProduct) => {
        const url =`/api/product/${idProduct}`;
        return axiosClient.get(url);
    },
    newProduct: (data) => {
        const url =`/api/product/new-product`;
        return axiosClient.post(url, JSON.stringify(data));
    },
    updateStatus: async (idProduct) => {
        const accessToken = localStorage.getItem('accessToken');
        const url =`/api/product/update-status`;
        return await axiosClient.post(url, JSON.stringify({idProduct}), {
            headers: { 'Authorization':`Bearer ${accessToken}` } 
        });
    },
    updateProduct: (dataPost) => {
        console.log(dataPost);
        const url =`/api/product/update/${dataPost.data.idProduct}`;
        return axiosClient.post(url, JSON.stringify(dataPost));
    }
}

export default productApi;