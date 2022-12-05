import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const getHostelData = (payload) => ({
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


const varToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg4ZTNjMDRlZmQwNDMxNWYzNmRiYWMiLCJlbWFpbCI6InJhaHVsQG1hc2Fpc2Nob29sLmNvbSIsImlhdCI6MTY3MDIzMTc5MH0.uMITefHx7z7-u2apKMnsLvS4lNGG7vTxwla6_YmIFok";
export const fetchHomeData = (params) => (dispatch) => {
  dispatch(isLoading(true));
  axios.get(`http://localhost:9020`, {
      params,
  },
    {
      headers: {
        Authorization: 'Bearer ' + varToken
      }
  
    }
  )
    .then((res) => {
      dispatch(getHostelData(res.data))
      // console.log(res)
    })
    .catch((err) => dispatch(isError(true)))
    .finally(() => dispatch(isLoading(false)));
};
