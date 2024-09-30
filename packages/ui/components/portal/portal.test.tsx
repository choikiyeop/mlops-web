import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Portal } from './portal';

describe('<Portal />', () => {
  it('Portal은 다른 노드에서 렌더링되어야 한다.', () => {
    render(
      <div id="test">
        <h1 className="portal1">Foo</h1>
        <Portal>
          <h1 className="portal2">Foo</h1>
        </Portal>
      </div>
    );

    const rootElement = document.querySelector('#test')!;

    expect(rootElement.contains(document.querySelector('.portal1'))).to.equal(true);
    expect(rootElement.contains(document.querySelector('.portal2'))).to.equal(false);
  });
});
