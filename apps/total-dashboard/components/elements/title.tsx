'use client';

import { usePathname } from 'next/navigation';
import { MENUS } from '../../constants/menu';

export const Title = () => {
  const pathname = usePathname();

  return (
    <>
      {
        MENUS.CLUSTER_MENU.flatMap((item) => (item.children ? item.children : item)).find(
          (menu) => menu.href === pathname
        )?.name
      }
    </>
  );
};
