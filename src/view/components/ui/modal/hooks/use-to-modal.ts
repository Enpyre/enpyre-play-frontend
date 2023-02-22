import { useRef, useState } from 'react';
import { ModalHandles, PropsModal } from '../types';

export const useToModal = (initial: PropsModal) => {
  const modalRef = useRef<ModalHandles>(null);
  const [modalState, setModalState] = useState<PropsModal>(initial);

  return { modalRef, modalState, setModalState };
};
