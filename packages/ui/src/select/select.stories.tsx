import type { Meta } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const meta = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export const Primary = () => (
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="아이디" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="item1">아이디</SelectItem>
      <SelectItem value="item2">이름</SelectItem>
      <SelectItem value="item3">사용자 수</SelectItem>
      <SelectItem value="item4">권한 수</SelectItem>
      <SelectItem value="item5">생성일</SelectItem>
    </SelectContent>
  </Select>
);
