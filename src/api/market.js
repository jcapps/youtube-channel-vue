const products = [
    {name: 'bowl'},
    {name: 'milk'},
    {name: 'spoon'},
    {name: 'cereal'}
];

export default {
    getProducts() {
        return new Promise((resolve, reject) => {
            resolve(products);
        });
    }
};