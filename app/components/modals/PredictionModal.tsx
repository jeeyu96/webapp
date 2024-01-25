'use client';

import { useMemo, useState } from "react";

import usePredictionModal from "@/app/hooks/usePredictionModal";

import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";

import Link from "next/link"


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



    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which predictions are you looking for?"
                subtitle="Pick your clinic to look at."
            >
            </Heading>
            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
                max-h-[50vh]
                overflow-y-auto
                "
            >
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        {item.label}
                    </div>
                ))}
            </div>

            <div>
                <Link href="/users"> Users </Link>
            </div>
            
        </div>
    )

    return ( 
        <Modal 
            isOpen={predictionModal.isOpen}
            onClose={predictionModal.onClose}
            onSubmit={predictionModal.onClose}
            actionLabel={actionLabel}
            secondaryActionLabel= {secondaryActionLabel}
            secondaryAction= {step == STEPS.PREDICTIONS ? undefined : onBack}
            title="Global Predictions"
            body={bodyContent}
        />
     );
}
 
export default PredictionModal;