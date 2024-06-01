'use client';

import { formatter } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const Currency = ({ value }: { value: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  //call like utils cause hydration error
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
