'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'investment' | 'partner' | null;

type ModalContextType = {
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};


const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
