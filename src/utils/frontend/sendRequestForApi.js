const { default: axios } = require("axios");

const sendRequestForApi = async (method, tableName, callback, body) => {
  try {
    axios({
      method: method,
      url: process.env.API_URL + tableName,
      data: body,
    })
      .then(({ data }) =>
        callback({
          success: true,
          data: data.data,
        })
      )
      .catch((error) => {
        const errorServer = error.response?.data.error;
        const errorServerToUppe =
          errorServer &&
          errorServer.charAt(0).toUpperCase() + errorServer.slice(1);
        callback({
          success: false,
          error: error.message,
          errorServer: errorServerToUppe,
        });
      });
  } catch (error) {
    return {};
  }
};

export default sendRequestForApi;
