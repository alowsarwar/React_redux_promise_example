import typeToReducer from 'type-to-reducer';
export const AJAX_CALL = 'AJAX_CALL';

const initState = {
  ajaxResponse: null,
  loading: false
};

export const actionAJAX_CALL = () => {
  return {
    type: AJAX_CALL,
    payload: new Promise((resolve, reject) => {
                let wait = setTimeout(() => {
                resolve('Dummy Ajax Response');
              }, 2000)
    }),
  };
};

export const countReducer = typeToReducer({
  [AJAX_CALL]: {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
    }),
    REJECTED: (state) => ({
      ...state,
      loading: false,
    }),
    FULFILLED: (state, action) => ({
      loading: false,
      ajaxResponse: action.payload,
    })
  }
}, initState);
