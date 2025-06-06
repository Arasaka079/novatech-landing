import type { ChildrenProps } from '../../types';

export function Container({ children }: ChildrenProps) {
  return <div className="container mx-auto p-4">{children}</div>;
}
