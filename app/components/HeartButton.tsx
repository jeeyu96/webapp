'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";



interface HeartButtonProps{
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    });


    return ( 
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
        >
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart 
                size={24}
                className={
                    hasFavorited ? 'fill-fmc-vivid-red' : 'fill-fmc-warm-gray-3'
                }
            />
        </div>
     );
}
 
export default HeartButton;