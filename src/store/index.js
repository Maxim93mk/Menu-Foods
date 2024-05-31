const initStore = {
    countProducts: 0,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
};


function reducer(store = initStore, action) {
     console.log(action.id, store.basketProducts)
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...store,
                countProducts: store.basketProducts.length,
                totalPrice: store.totalPrice + action.priceItem,
                 basketProducts: store.basketProducts.concat(action.data),
            };
        case 'REMOVE_PRODUCT':
            return {
                ...store,
                countProducts: store.countProducts - 1,
                totalPrice: store.totalPrice - action.priceItem,
                basketProducts: store.basketProducts.filter((elem) => elem.id!==action.id),
                // basketProducts: store.basketProducts.filter((elem)=> console.log(elem.id, action.id)),
                // basketProducts: console.log(store.basketProducts, action.data.id),

            };
        default: return store;
    }

}

export { initStore, reducer };