import typeToReducer from 'type-to-reducer';
export const ADDCOUNT = 'ADDCOUNT';

const initState = {
  count: 0,
  loading: false
};

export const actionAddCount = () => {
  return {
    type: ADDCOUNT,
    payload: new Promise((resolve, reject) => {
  	let wait = setTimeout(() => {
    resolve('Dummy Ajax Response');
  }, 4000)
}),
  };
};

export const countReducer = typeToReducer({
  [ADDCOUNT]: {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
    }),
    REJECTED: (state) => ({
      ...state,
      loading: false,
    }),
    FULFILLED: (state, action) => ({
      count: state.count + 1,
      loading: false,
      ajaxResponse: action.payload,
    })
  }
}, initState);
