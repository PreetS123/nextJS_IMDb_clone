import "../app/globals.css";
import React from 'react';
import NavItem from './common/NavItem';

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center justify-center bg-amber-100 dark:bg-gray-600  lg:text-lg p-4">
      <NavItem title="Trending" param="trending" />
      <NavItem title="Top Rated" param="rated" />
    </div>
  )
}

export default Navbar;
