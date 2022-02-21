import React, { createContext, useContext, useReducer, useState, Dispatch } from 'react';
import jwt_decode from 'jwt-decode';



type userToken = {
  ID: string,
  Role: string,
  Name: string
}


const userInitialState: userToken = { ID: '', Role: '', Name: '' };

export const AuthContext = createContext<{
  user: userToken;
  dispatch: Dispatch<any>;
}>({
  user: userInitialState,
  dispatch: () => null
});

export const useAuthContext = () => {
  return useContext(AuthContext);
}

interface AuthContextProviderProps {
  children: React.ReactNode
}



const AuthContextProvider = ({ children, }: AuthContextProviderProps) => {

  //const [ auth, setAuth] = useState();

  const userReducer = (state: any, action: any) => {

    switch (action.type) {
      case 'LoadUser':
        const cookie = localStorage.getItem('userToken');

       
        let token = jwt_decode<userToken>(cookie || '') || null;
      
        return {
          ID: token.ID,
          Role: token.Role,
        }
      case 'DeleteUser':
        return action.user
      default:
        return "";
    }
  }

  const [user, dispatch] = useReducer(userReducer, '', () => {
    const token = localStorage.getItem('userToken');
    console.log(token);
    if (token) {
      let user = jwt_decode<userToken>(token || '') || null;
      return {
        ID: user.ID,
        Role: user.Role,
      }
    } else
      return '';

  });


  return (
    <AuthContext.Provider value={{ user, dispatch }} >
      {children}
    </AuthContext.Provider>

  );
}

export default AuthContextProvider;