
import { ERROR, LOADING,FETCH_DATA } from "./action.home";

const initStore = {
  home: [],
  loading: false,
  error: false,
};

export const reducer = (store = initStore, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_DATA: {
      return { ...store, home: payload };
    }
    
    case LOADING: {
      return { ...store, loading: payload };
    }
    case ERROR: {
      return { ...store, loading: payload };
    }
    default: {
      return store;
    }
  }
};
