import { useRef, RefObject } from 'react';

export const useRefs = (count: number): RefObject<null>[] => {
  const refs: RefObject<null>[] = Array.from({ length: count }, () => useRef(null));
  return refs;
};