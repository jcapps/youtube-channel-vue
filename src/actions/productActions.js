import market from '../api/market';

export function getAllProducts({commit}) {
    market.getProducts().then(products => {
        commit('GET_ALL_PRODUCTS', products);
    });
}

export function clearProducts({commit}) {
    commit('CLEAR_PRODUCTS');
}