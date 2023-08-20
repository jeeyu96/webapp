'use client'


import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";




interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}


const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {    
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        // define empty query
        let currentQuery = {};

        // check if we have params at all
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        // add new category there
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        // reset category if click on icon again
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        // generate URL string, pass path name
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        // pass newst query
        router.push(url);
    }, [label, params, router]);


    return ( 
        <div
            onClick={handleClick}
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected? 'border-b-neutral-800' : 'border-transparent'}
                ${selected? 'text-neural-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
     );
}
 
export default CategoryBox;