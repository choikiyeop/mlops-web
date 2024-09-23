'use client';

import { usePathname } from 'next/navigation';
import { MENUS } from '../../constants/menu';
import { useMemo } from 'react';

export const Title = () => {
  const pathname = usePathname();

  const menus = useMemo(() => {
    return MENUS.CLUSTER_MENU.flatMap((item) => (item.children ? item.children : item));
  }, []);

  return <>{menus.find((menu) => menu.href === pathname)?.name}</>;
};
