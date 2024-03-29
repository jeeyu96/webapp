'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenItem';

import usePredictionModal from '@/app/hooks/usePredictionModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';


// interface for currentUser
interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const predictionModal = usePredictionModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);


    const onRent = useCallback(() => {
        // check if there is a current user
        if (!currentUser) {
            return loginModal.onOpen();
        }

        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);


    // create onPrediction function
    const onPrediction = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        // Open Prediction Modal
        predictionModal.onOpen()
    }, [currentUser, loginModal, predictionModal]);


    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    "
                >
                    New Entry here!
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-12
                        text-sm
                    "
                >
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser? (
                            <>
                            <MenuItem 
                                onClick={() => {}}
                                label="My clinics"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="My devices"
                            />
                            <MenuItem
                                onClick={predictionModal.onOpen}
                                label="Predictions"
                            />
                            <MenuItem 
                                onClick={() => {}}
                                label="favorites"
                            />
                            <MenuItem 
                                onClick={rentModal.onOpen}
                                label="CPM Assistant"
                            />
                            <hr />
                            <MenuItem 
                                onClick={() => signOut()}
                                label="Logout"
                            />
                        </>                                                       
                        ) : (
                            <>
                                <MenuItem 
                                    onClick={loginModal.onOpen}
                                    label="Login"
                                />
                                <MenuItem 
                                    onClick={registerModal.onOpen}
                                    label="Sign up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default UserMenu;
