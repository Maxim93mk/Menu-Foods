const initStore = {
    countProducts: 0,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
};


function reducer(store = initStore, action){
    return store;
}

export {initStore, reducer};