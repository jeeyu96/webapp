'use client'

import Container from "../Container"

import { LuBuilding } from "react-icons/lu";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";




// create list of icons for categories
export const categories = [
    {
        label: 'FMC-Almeria',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Antequera',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Astorga',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Baleares',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Barcelona',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Barcelona-NCGI',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-Bilbao',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    },
    {
        label: 'FMC-CaceresNC',
        icon: LuBuilding,
        description: 'Insert clinc description here!'
    }
]


const Categories = () => {
    // create hooks
    const params = useSearchParams();
    // extract category from params
    const category = params?.get('category');
    // limit this view to index page only
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    // if not on main page
    if (!isMainPage) {
        return null;
    }

    return ( 
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default Categories;