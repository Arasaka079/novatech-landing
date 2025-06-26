import type { ChildrenProps } from '../../types';

export function Container({ children }: ChildrenProps) {
  return <div className="container mx-auto px-4">{children}</div>;
}
