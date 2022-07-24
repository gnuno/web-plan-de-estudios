import { ModalsProvider } from '@mantine/modals';
import React, { useContext, useState} from 'react'

export enum ModalType {
    LOGIN = 'Login',
    SIGNUP = 'Signup',
    FORGOT_PASSWORD = 'ForgotPassword',
    RESET_PASSWORD = 'ResetPassword',
    CHANGE_PASSWORD = 'ChangePassword',
    NONE = 'None'
}


type ModalContextProviderProps = {
  children: React.ReactNode
}

const Context = React.createContext<{
    modalType: ModalType,
    setModalType: React.Dispatch<React.SetStateAction<ModalType>>
}>({
    modalType: ModalType.NONE,
    setModalType: () => console.log("Initializing Sidebar Context ")
});

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({children}) => {
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);


  return <Context.Provider value={{modalType, setModalType}}>
      <ModalsProvider>
    {children}
    </ModalsProvider>
  </Context.Provider>
}

export const useModal = () => useContext(Context);
