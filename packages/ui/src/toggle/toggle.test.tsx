import { render, type RenderResult } from '@testing-library/react';
import { Toggle } from './toggle';
import { describe, beforeEach, it, expect } from 'vitest';

const TEXT_CHILD = 'test';

describe('토글의 텍스트가 주어졌을때', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Toggle>{TEXT_CHILD}</Toggle>);
  });

  it('false/off 속성이 기본으로 렌더링 되어야한다', async () => {
    const button = rendered.getByRole('button', { name: TEXT_CHILD });

    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button).toHaveAttribute('data-state', 'off');
  });
});
