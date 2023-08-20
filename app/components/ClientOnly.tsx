'use client';


import { hostname } from "os";
import { useEffect, useState } from "react";


interface ClientOnlyProps {
    children: React.ReactNode;
}


const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);
        
    useEffect(() => {
        setHasMounted(true);
    }, [])

    // if has not mounted
    if (!hasMounted) {
        return null;
    }
    
    return ( 
        <>
            {children}
        </>
      );
}
 
export default ClientOnly;