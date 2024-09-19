import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface DashboardLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const DashboardLayout = ({ className, children, ...props }: DashboardLayoutProps) => {
  return (
    <div className={cn('bg-background max-h-screen flex-1 pt-1', className)} {...props}>
      <div className="bg-foreground size-full rounded-tl-[7px] pl-2.5">{children}</div>
    </div>
  );
};

interface DashboardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const DashboardTitle = ({ className, children, ...props }: DashboardTitleProps) => {
  return (
    <div
      className={cn(
        "flex h-16 items-center pl-[9px] before:mr-[14px] before:h-4 before:border-l-[3px] before:border-solid before:border-[#071e3f] before:content-['']",
        className
      )}
      {...props}
    >
      <h1 className="text-lg">{children}</h1>
    </div>
  );
};

interface DashboardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const DashboardContent = ({ children, ...props }: DashboardContentProps) => {
  return <div {...props}>{children}</div>;
};
