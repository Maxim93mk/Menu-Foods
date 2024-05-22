const initStore = {
    countProducts: 0,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
};


function reducer(store = initStore, action) {
    console.log(action.name)
    switch (action.type) {
        case 'ADD_PRODUCT':
            return{
             ...store,   
             countProducts: store.countProducts + 1,
             totalPrice: store.totalPrice + action.priceItem,
             basketProducts: store.basketProducts.concat(action.data),
            }
        case 'REMOVE_PRODUCT':
        break;
        default: return store;
    }

}

export { initStore, reducer };