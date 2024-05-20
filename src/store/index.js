const initStore = {
    countProducts: 0,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
};


function reducer(store = initStore, action) {
    console.log(store)
    switch (action.type) {
        case 'ADD_PRODUCT':
            return{
             ...store,   
             countProducts: store.countProducts + 1,
             totalPrice: store.totalPrice + action.priceItem,
            }
        case 'REMOVE_PRODUCT':
        break;
        default: return store;
    }

}

export { initStore, reducer };