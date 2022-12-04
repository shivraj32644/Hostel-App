import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const getAdminData = (payload) => ({
  type: FETCH_DATA,
  payload
});

export const isLoading = (payload) => ({
  type: LOADING,
  payload
});

export const isError = (payload) => ({
    type: ERROR,
    payload
});


export const fetchHomeData = (params) => (dispatch) => {
  dispatch(isLoading(true));
  axios.get(`http://localhost:9030`, {
      params,
    })
    .then((res) => dispatch(getUserData(res.data)))
    .catch(() => dispatch(isError(true)))
    .finally(() => dispatch(isLoading(false)));
};
