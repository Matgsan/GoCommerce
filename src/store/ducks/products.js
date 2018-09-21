export const Types = {
  GET_PRODUCTS_REQUEST: 'products/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'products/GET_PRODUCTS_FAILURE',
};
const initialState = {
  list: [],
  loading: true,
  error: null,
};
export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_PRODUCTS_SUCCESS:
      return {
        error: null,
        loading: false,
        list: action.payload.list,
      };
    case Types.GET_PRODUCTS_FAILURE:
      return {
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
export const Creators = {
  getProductsRequest: category => ({
    type: Types.GET_PRODUCTS_REQUEST,
    payload: { category },
  }),
  getProductsSuccess: data => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: { list: data.products },
  }),
  getProductsFailure: error => ({
    type: Types.GET_PRODUCTS_FAILURE,
    payload: { error, list: [] },
  }),
};
