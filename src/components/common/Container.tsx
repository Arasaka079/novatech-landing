import React from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ChildrenProps) {
  return <div className="container mx-auto px-4 max-w-[1320px]">{children}</div>;
}
