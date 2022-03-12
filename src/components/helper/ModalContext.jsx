import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
    modalText: {
        career: "",
        description: () => null
    },
    setModalText: () => { }
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const [modalText, setModalText] = useState({
        career: "",
        description: () => null
    });

    return (
        <ModalContext.Provider value={{ modalText, setModalText }}>
            {children}
        </ModalContext.Provider>
    )
}


