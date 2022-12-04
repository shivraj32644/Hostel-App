import { ERROR, FETCH_ADMIN_DATA, FETCH_USER_DATA, LOADING } from "./action";

const initStore = {
  adminData: [],
  userData: [],
  loading: false,
  error: false,
};

export const reducer = (store = initStore, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_ADMIN_DATA: {
      return { ...store, adminData: payload };
    }
    case FETCH_USER_DATA: {
      return { ...store, userData: payload };
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
