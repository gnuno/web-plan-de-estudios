import { useLocalStorage } from '@mantine/hooks';
import React, { useContext, useEffect, useState} from 'react'

const Context = React.createContext<{
    jwt:string|null,
    setSession:(jwt: string | null, username: string | null, userId: string | null, avatar: string | null) => void,
    username: string|null,
    userId: string|null,
    avatar: string|null,
}>({
    jwt: null,
    setSession:() => console.log("Initializing User Context "),
    username: null,
    userId: null,
    avatar: null,
});

type UserContextProviderProps = {
  children: React.ReactNode
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
  const [jwt, setJWT] = useLocalStorage<string|null>({ key: 'jwt', defaultValue: null });
  const [username, setUsername] = useLocalStorage<string|null>({ key: 'username', defaultValue: null });
  const [userId, setUserId] = useLocalStorage<string|null>({ key: 'userId', defaultValue: null });
  const [avatar, setAvatar] = useLocalStorage<string|null>({ key: 'avatar', defaultValue: null });
  
  const setSession = (jwt:string|null, username:string|null, userId: string|null, avatar: string|null)=>{
      setJWT(jwt);
      setUserId(userId);
      setUsername(username);
      setAvatar(avatar);
  }

  return <Context.Provider value={{
    jwt,
    setSession,
    username,
    userId,
    avatar
  }}>
    {children}
  </Context.Provider>
}

export const useUser = () => useContext(Context);