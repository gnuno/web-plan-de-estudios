import React, { useContext, useState} from 'react'

const Context = React.createContext<{
    showSidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}>({
    showSidebar: false,
    setSidebar: () => console.log("Initializing Sidebar Context ")
});

type SidebarContextProviderProps = {
  children: React.ReactNode
}

export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({children}) => {
  const [showSidebar, setSidebar] = useState(false);


  return <Context.Provider value={{showSidebar, setSidebar}}>
    {children}
  </Context.Provider>
}

export const useSidebar = () => useContext(Context);
