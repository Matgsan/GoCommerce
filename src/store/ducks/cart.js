export const Types = {
  ADD_PRODUCT: 'cart/ADD_PRODUCT',
  REMOVE_PRODUCT: 'cart/REMOVE_PRODUCT',
  SET_QUANTITY: 'cart/SET_QUANTITY'
};

const initialState = {
  list: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      const alreadyAdded = state.list.find(
        product => product.id === action.payload.product.id
      );
      return {
        list: alreadyAdded
          ? state.list.map(
              product =>
                product.id === action.payload.product.id
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
            )
          : [...state.list, { ...action.payload.product, quantity: 1 }]
      };
    }
    case Types.REMOVE_PRODUCT:
      return {
        list: state.list.filter(
          product => product.id !== action.payload.product.id
        )
      };
    case Types.SET_QUANTITY:
      return {
        list: state.list.map(
          product =>
            product.id === action.payload.product.id
              ? { ...product, quantity: action.payload.quantity }
              : product
        )
      };
    default:
      return state;
  }
}

export const Creators = {
  addProduct: product => ({
    type: Types.ADD_PRODUCT,
    payload: { product }
  }),
  removeProduct: product => ({
    type: Types.REMOVE_PRODUCT,
    payload: { product }
  }),
  setQuantity: (product, quantity) => ({
    type: Types.SET_QUANTITY,
    payload: { product, quantity }
  })
};
