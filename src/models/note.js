import { query } from '../services/note';

export default {

  namespace: 'note',

  state: {
    foo: 'open',
  },

  subscriptions: {

  },

  effects: {
    *query({ payload }, { call, put }) {
      const { data } = yield call(query, payload);
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            foo: data.data[1],
          },
        });
      } else {
        alert(data.message);
      }
    },
  },

  reducers: {
    // 使用服务器数据返回
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
  },

};
