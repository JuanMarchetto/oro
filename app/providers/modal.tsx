import React, { createContext, useContext, useState, useCallback, ReactNode, FC } from 'react';

interface ModalContextProps {
    isOpen: boolean;
    modalContent: ReactNode | null;
    showModal: (component: ReactNode) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const showModal = useCallback((component: ReactNode) => {
        setModalContent(component);
        setIsOpen(true);
    }, []);

    const hideModal = useCallback(() => {
        setIsOpen(false);
        setModalContent(null);
    }, []);

    return (
        <ModalContext.Provider value={{ isOpen, modalContent, showModal, hideModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
