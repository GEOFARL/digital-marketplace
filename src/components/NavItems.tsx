'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useState } from 'react';
import NavItem from './NavItem';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = activeIndex === i;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={activeIndex !== null}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
