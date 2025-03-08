"use client"
import Error from '@/app/error';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const NavItemContent = ({ title, param }) => {
    // const searchParams = useSearchParams();
    // const genre = searchParams.get('genre');
    const genre= usePathname().split('/')[2];

    return (
        <Link 
            className={`hover:text-amber-500 font-semibold
            ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg' : ''}`}
            href={`/top/${param}`}
        >
            {title}
        </Link>
    );
};

const NavItem = (props) => (
    <Suspense fallback={Error}>
        <NavItemContent {...props} />
    </Suspense>
);

export default NavItem;
