'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import { useRef, useState } from 'react';
import NavItem from './NavItem';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => {
    setActiveIndex(null);
  });

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
