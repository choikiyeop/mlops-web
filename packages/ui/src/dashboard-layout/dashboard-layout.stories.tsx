import type { Meta, StoryObj } from '@storybook/react';
import { DashboardContent, DashboardLayout, DashboardTitle } from './dashboard-layout';

const meta = {
  title: 'UI/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <DashboardLayout className="min-h-screen min-w-[800px]">
        <DashboardTitle>제목</DashboardTitle>
        <DashboardContent>ㅁㄴㅇ</DashboardContent>
      </DashboardLayout>
    ),
  },
};
