'use client';

import Image from "next/image";

// if user has an profile img form social login...
interface AvatarProps {
    src: string | null | undefined;
};


const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( 
        <Image 
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={src || "/images/placeholder.jpg"}
        />
     );
}
 
export default Avatar;