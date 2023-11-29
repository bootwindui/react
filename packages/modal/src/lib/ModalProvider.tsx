import { ReactNode, useContext, createContext, useState } from "react"

interface IModalProvider {
    isOpen: boolean 
    modal?: ReactNode
    openModal: () => void 
    closeModal: () => void 
}

const ModalContext = createContext<IModalProvider>({
    isOpen: false,
} as IModalProvider)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const [modal, setModal] = useState()


    return (
        <ModalContext.Provider value={{closeModal, openModal, isOpen, modal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)