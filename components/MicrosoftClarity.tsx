'use client';
import { useEffect } from 'react';

export default function MicrosoftClarity() {
  useEffect(() => {
    (function(
      c: Record<string, unknown>,
      l: Document,
      a: string,
      r: string,
      i: string
    ){
      const w = c as Record<string, ((...args: unknown[]) => void) & { q?: unknown[] }>;
      w[a] = w[a] || function(...args: unknown[]){ (w[a].q = w[a].q || []).push(args) };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode?.insertBefore(t, y);
    })(window as unknown as Record<string, unknown>, document, "clarity", "script", "xd3xwhkb2s");
  }, []);
  return null;
}