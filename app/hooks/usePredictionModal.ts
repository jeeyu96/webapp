import { create } from 'zustand';

interface PredictionModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const usePredictionModal = create<PredictionModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

export default usePredictionModal;