import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { RoutePath } from '../lib/router';

interface HeaderProps {
  currentPath: RoutePath;
  navigate: (to: RoutePath) => void;
}

const NAV_ITEMS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact', path: '/contact' },
];

export function Header({ currentPath, navigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (to: RoutePath) => {
    navigate(to);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-ymga">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNav('/')}
            className="flex flex-col items-start text-left group"
            aria-label="YMGA Business Development — Home"
          >
            <span className="font-serif text-2xl font-bold text-navy-900 tracking-wide leading-none">
              YMGA
            </span>
            <span className="text-[10px] font-medium tracking-widest text-gold-600 uppercase mt-1">
              Business Development
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                  currentPath === item.path
                    ? 'text-navy-900'
                    : 'text-navy-500 hover:text-navy-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    currentPath === item.path ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNav('/contact')}
              className="btn-primary !px-6 !py-3"
            >
              Discuss Your Opportunity
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="md:hidden pb-6 pt-2 border-t border-navy-100 animate-fade-in"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`text-left px-3 py-3 text-sm font-medium tracking-wide transition-colors ${
                    currentPath === item.path
                      ? 'text-navy-900 bg-navy-50'
                      : 'text-navy-500 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('/contact')}
                className="btn-primary mt-3 w-full"
              >
                Discuss Your Opportunity
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
