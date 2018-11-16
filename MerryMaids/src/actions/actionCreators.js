import API_CONST from "../constants/APIConstants";

export const userLogin = (data) => {
  return {
    type: API_CONST.N_USER_LOGIN,
    data
  };
};
