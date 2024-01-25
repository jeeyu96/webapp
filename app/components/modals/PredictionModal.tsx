'use client';

import usePredictionModal from "@/app/hooks/usePredictionModal";

import Modal from "./Modal";

const PredictionModal = () => {
    // from /hooks/usePredictionModal.ts
    const predictionModal = usePredictionModal();   

    return ( 
        <Modal 
            isOpen={predictionModal.isOpen}
            onClose={predictionModal.onClose}
            onSubmit={predictionModal.onClose}
            actionLabel="Submit"
            title="Global Predictions"
        />
     );
}
 
export default PredictionModal;