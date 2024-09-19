import { ComponentPropsWithoutRef, forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/utils';
import Link from 'next/link';

interface SidebarProps extends ComponentPropsWithoutRef<'aside'> {}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(({ className, ...props }, forwardedRef) => {
  return (
    <aside
      ref={forwardedRef}
      className={cn('flex h-full w-[231px] flex-col', className)}
      {...props}
    />
  );
});

interface SidebarLogoProps extends ComponentPropsWithoutRef<'div'> {}

const SidebarLogo = forwardRef<HTMLDivElement, SidebarLogoProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn('flex h-16 shrink-0 items-center justify-center', className)}
        {...props}
      >
        <Link href="/">로고 이미지</Link>
      </div>
    );
  }
);

interface SidebarUserProps extends ComponentProps<'div'> {}

const SidebarUser = forwardRef<HTMLDivElement, SidebarUserProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn('flex h-[132px] items-center p-[25px]', className)}
        {...props}
      >
        유저
      </div>
    );
  }
);

interface Menu {
  name: string;
  href: string;
  children?: Menu[];
}

interface SidebarMenuProps extends ComponentProps<'nav'> {
  menus: Menu[];
}

const SidebarMenu = forwardRef<HTMLElement, SidebarMenuProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <nav ref={forwardedRef} className={cn('flex-1 overflow-y-auto', className)} {...props}>
        <div className="">
          <ul className="mb-[50px]">
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
            <li className="h-40"></li>
          </ul>
        </div>
      </nav>
    );
  }
);

export { Sidebar, SidebarLogo, SidebarUser, SidebarMenu, type Menu };
