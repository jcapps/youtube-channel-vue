import * as productActions from '../actions/productActions';

export default {
    getAllProducts: productActions.getAllProducts,
    clearProducts: productActions.clearProducts
};

// import market from '../api/market';

// export default {
//     getAllProducts({commit}) {
//         market.getProducts().then(products => {
//             commit('GET_ALL_PRODUCTS', products);
//         });
//     },

//     clearProducts({commit}) {
//         commit('CLEAR_PRODUCTS');
//     }
// };