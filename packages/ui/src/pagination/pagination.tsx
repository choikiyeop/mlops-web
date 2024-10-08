import { ComponentProps, forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../button/button';

const Pagination = forwardRef<HTMLElement, ComponentProps<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cn('flex', className)}
      {...props}
    />
  )
);

interface PaginationStatusProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
}

const PaginationStatus = forwardRef<HTMLDivElement, PaginationStatusProps>(
  ({ currentPage, totalPages, className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center px-3 text-xs', className)} {...props}>
      <span>{`${currentPage - 1}1 - ${currentPage}0  of ${totalPages}`}</span>
    </div>
  )
);

interface PaginationButtonProps extends ComponentProps<'button'> {}

const PaginationButton = ({ className, ...props }: PaginationButtonProps) => (
  <Button aria-current="page" className={cn('group size-6', className)} {...props} />
);

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to previous page"
    className={cn('flex items-center justify-center', className)}
    {...props}
  >
    <span className="bg-prev size-5 overflow-hidden whitespace-nowrap bg-top bg-no-repeat group-hover:bg-bottom" />
  </PaginationButton>
);

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to next page"
    className={cn('flex items-center justify-center', className)}
    {...props}
  >
    <div className="bg-prev size-5 rotate-180 overflow-hidden whitespace-nowrap bg-top bg-no-repeat group-hover:bg-bottom" />
  </PaginationButton>
);

export { Pagination, PaginationStatus, PaginationPrevious, PaginationNext };
