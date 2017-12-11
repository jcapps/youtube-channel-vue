export function GET_ALL_PRODUCTS(state, products) {
    state.products = products;
}

export function CLEAR_PRODUCTS(state) {
    state.products = [];
}