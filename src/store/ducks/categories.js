export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  GET_FAILURE: 'categories/GET_FAILURE',
  SET_CATEGORY: 'categories/SET_CATEGORY',
};
const initialState = {
  list: [],
  loading: true,
  error: null,
  currentCategory: null,
};
export default function categories(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CATEGORY:
      return {
        ...state,
        loading: false,
        currentCategory: action.payload.currentCategory,
      };
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        list: action.payload.list,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
export const Creators = {
  getCategoriesRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { list: data },
  }),
  getCategoriesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
  setCurrentCategory: category => ({
    type: Types.SET_CATEGORY,
    payload: { currentCategory: category },
  }),
};
