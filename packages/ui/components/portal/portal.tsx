'use client';

import { ComponentPropsWithoutRef, forwardRef, Fragment, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends ComponentPropsWithoutRef<'div'> {
  container?: Element | DocumentFragment | null;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>(({ container, ...props }, forwardedRef) => {
  const [mountNode, setMountnode] = useState<Element | DocumentFragment | null>(null);

  useLayoutEffect(() => {
    setMountnode(container || document.body);
  }, [container]);

  return (
    <Fragment>
      {mountNode ? createPortal(<div {...props} ref={forwardedRef} />, mountNode) : mountNode}
    </Fragment>
  );
});

export { Portal, type PortalProps };
