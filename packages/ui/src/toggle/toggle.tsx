import { ButtonHTMLAttributes } from 'react';

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Toggle = ({ ...props }: ToggleProps) => {
  return <button type="button" aria-pressed={false} data-state={'off'} {...props} />;
};
