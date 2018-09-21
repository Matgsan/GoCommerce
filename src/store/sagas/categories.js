import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.setCurrentCategory(response.data[0]));
    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(
      CategoriesActions.getCategoriesFailure('Erro ao buscar dados da API')
    );
  }
}
