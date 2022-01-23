export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, error: null, data: action.payload };
    case 'FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
};
