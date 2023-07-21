export function getAuthTokenFromLocalStorage(key) {

  if(!key){
    console.log("key not found");
    return;
  }
  return localStorage.getItem(key);

  }

export function setAuthTokenInLocalStorage(key,value) {
  if(!key || !value){
    console.log("token not found");
    return;
  }
  const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key,valueToStore);

}
export function removeAuthTokenInLocalStorage(key) {
  if(!key){
    console.log("key not found");
    return;
  }
  localStorage.removeItem(key);
}

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};
