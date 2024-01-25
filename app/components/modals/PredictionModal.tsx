'use client';

import { useMemo, useState } from "react";

import usePredictionModal from "@/app/hooks/usePredictionModal";

import Modal from "./Modal";


// create steps
enum STEPS {
    PREDICTIONS = 0,
    ERRORLOG = 1,
    FEEDBACK = 2,

}

const PredictionModal = () => {
    // from /hooks/usePredictionModal.ts
    const predictionModal = usePredictionModal();   

    const [step, setStep] = useState(STEPS.PREDICTIONS);


    // move from step to step
    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    }


    // actionLabel 1 "NEXT"
    const actionLabel = useMemo(() => {
        if (step == STEPS.FEEDBACK) {
            return 'Submit Feedback'
        }

        return 'Next';
    }, [step]);

    // actionLabel 2 "BACK"
    const secondaryActionLabel = useMemo(() => {
        if (step == STEPS.PREDICTIONS) {
            return undefined;
        }

        return 'Back'
    }, [step])


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