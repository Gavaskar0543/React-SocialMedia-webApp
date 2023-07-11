import { Local_Storage_TOKEN_KEY } from "../utils/index";
import { API_URLS } from "../utils/inde";
let customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(Local_Storage_TOKEN_KEY);
  //header
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  //if token exist in local storage then add new key to headers as authoriztion
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  //config
  const config = {
    //including custom config
    ...customConfig,
    headers: {
      //header contains content and accept
      ...headers,
      //costomConfig contains an header
      ...customConfig.headers,
    },
  };
  //if body exits as parameter then create new key in config and store its value using json stringyfy
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
//if success
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }
    throw new Error(data.message);
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
      success: false,
    };
  }
};

//getpost
export const getPost = (pages=1, limitOfPost=5) => {
  return customFetch(API_URLS.posts(pages,limitOfPost),{
    method :'GET'
  });
};
