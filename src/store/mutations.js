import * as productMutations from '../mutations/productMutations';

export default {
    GET_ALL_PRODUCTS: productMutations.GET_ALL_PRODUCTS,
    CLEAR_PRODUCTS: productMutations.CLEAR_PRODUCTS
};

// export default {
//     GET_ALL_PRODUCTS(state, products) {
//         state.products = products;
//     },

//     CLEAR_PRODUCTS(state) {
//         state.products = [];
//     }
// };