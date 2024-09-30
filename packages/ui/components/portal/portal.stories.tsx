import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from './portal';

const meta = {
  title: 'UI-Internal/Portal',
  component: Portal,
  tags: ['autodocs'],
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: (
      <div className="max-h-[200px] max-w-[300px] overflow-auto border">
        <h1>이 내용은 메인 DOM 트리에서 렌더링됩니다.</h1>
        <p>DOM 트리에서 렌더링되는 내용입니다.</p>

        <Portal>
          <h1>이 내용은 portal에서 렌더링됩니다.</h1>
          <p>portal은 메인과 다른 DOM 트리에서 렌더링됩니다.</p>
        </Portal>
      </div>
    ),
  },
};
