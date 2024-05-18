const initStore = {
    countProducts: 99,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
};


function reducer (store = initStore, action){
    return store;
}

export {initStore, reducer};