import { useContext, useEffect, useState } from 'react';
import jwt from 'jwt-decode';

import { AuthContext } from '../Providers/index';
import { login as userLogin } from '../api';
import { setAuthTokenInLocalStorage,removeAuthTokenInLocalStorage} from '../utils';
import { Local_Storage_TOKEN_KEY } from '../utils/constants';
import { register,editUser } from '../api';
export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const userToken = localStorage.getItem(Local_Storage_TOKEN_KEY);
   if(userToken){
    const decodedUser = jwt(userToken);
    setUser(decodedUser);
    setLoading(false);
   }
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);
    setUser(response.data.user);
    setAuthTokenInLocalStorage(Local_Storage_TOKEN_KEY,response.data.token ? response.data.token : null);
    if (response.success) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);

    if (response.success) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const updateUserprofile = async (userId,name,password ,confirmPassword) => {
    const response = await editUser(userId,name,password ,confirmPassword);
    console.log(response,'response');
    if(response.success){
      setUser(response.data.user);
       setAuthTokenInLocalStorage(Local_Storage_TOKEN_KEY,response.data.token ? response.data.token : null);
      return {
        success: true,
      }
    }
    else{
      return {
        success: false,
        message: response.message,

      }
     
    }

  };

  const logout = () => {
    setUser(null);
    removeAuthTokenInLocalStorage(Local_Storage_TOKEN_KEY);
  };

  return {
    user,
    login,
    logout,
    loading,
    signup,
    updateUserprofile,
  };
};
