import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image src="/images/nova-logo.webp" alt="Logo" width={90} height={90} />
    </div>
  );
}
