export const GET_DAIL = 'get_dail';

// eslint-disable-next-line no-unused-vars
export const getDail = () => async (dispatch, getState, api) => {
  const res = {
    data: {
      status: 'programming',
      user: {
        id: '47483',
        username: 'devniel',
      },
    },
  };

  dispatch({
    type: GET_DAIL,
    data: res.data,
  });
};
