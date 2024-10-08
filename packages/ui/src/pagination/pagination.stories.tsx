import type { Meta } from '@storybook/react';
import { Pagination, PaginationNext, PaginationPrevious, PaginationStatus } from './pagination';

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

export const Primary = () => (
  <Pagination>
    <PaginationPrevious />
    <PaginationStatus currentPage={3} totalPages={114} />
    <PaginationNext />
  </Pagination>
);
