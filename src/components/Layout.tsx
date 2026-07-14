import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import type { RoutePath } from '../lib/router';

interface LayoutProps {
  children: ReactNode;
  currentPath: RoutePath;
  navigate: (to: RoutePath) => void;
}

export function Layout({ children, currentPath, navigate }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPath={currentPath} navigate={navigate} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
