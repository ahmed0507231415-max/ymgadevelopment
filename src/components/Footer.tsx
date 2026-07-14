import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import type { RoutePath } from '../lib/router';

interface FooterProps {
  navigate: (to: RoutePath) => void;
}

const FOOTER_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy & Confidentiality', path: '/privacy' },
];

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-ymga py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                YMGA
              </span>
              <span className="text-[10px] font-medium tracking-widest text-gold-400 uppercase mt-1">
                Business Development
              </span>
            </div>
            <p className="mt-5 text-sm text-navy-200 leading-relaxed max-w-xs">
              Qualified Opportunities. Trusted Business Relationships.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest text-gold-400 uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-navy-200 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-widest text-gold-400 uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-gold-400 shrink-0" />
                {/* EDITABLE PLACEHOLDER: Business Email — replace with real email address */}
                <span className="text-navy-200">Business Email</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-gold-400 shrink-0" />
                {/* EDITABLE PLACEHOLDER: Phone Number — replace with real phone number */}
                <span className="text-navy-200">Phone Number</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-400 shrink-0" />
                {/* EDITABLE PLACEHOLDER: Location — replace with real location */}
                <span className="text-navy-200">Location</span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin size={16} className="mt-0.5 text-gold-400 shrink-0" />
                {/* EDITABLE PLACEHOLDER: LinkedIn Page — replace with real LinkedIn URL */}
                <span className="text-navy-200">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-navy-800">
          <p className="text-xs text-navy-300 tracking-wide">
            &copy; 2026 YMGA Business Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
