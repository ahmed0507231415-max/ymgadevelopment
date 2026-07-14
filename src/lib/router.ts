import { useState, useEffect, useCallback } from 'react';

export type RoutePath = '/' | '/about' | '/solutions' | '/contact' | '/privacy';

function parseHash(): RoutePath {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const valid: RoutePath[] = ['/', '/about', '/solutions', '/contact', '/privacy'];
  return (valid.includes(hash as RoutePath) ? hash : '/') as RoutePath;
}

export function useRouter() {
  const [path, setPath] = useState<RoutePath>(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setPath(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to: RoutePath) => {
    window.location.hash = to;
  }, []);

  return { path, navigate };
}
