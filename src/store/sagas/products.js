import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.currentCategory.id}`);
    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure('Erro ao buscar dados da API'));
  }
}
