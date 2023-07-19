"use client";

import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => void;

export default function usecopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator.clipboard) {
      alert('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1000);
    } catch (error) {
      console.warn('Copy failed', error);
      return false;
    }
  }

  return [copiedText, copy];
};
