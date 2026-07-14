import {
  ArrowRight,
  Users,
  Package,
  Handshake,
  Briefcase,
  LifeBuoy,
  ShieldCheck,
  Lock,
  Eye,
  Award,
  HeartHandshake,
} from 'lucide-react';
import type { RoutePath } from '../lib/router';
import { useSEO } from '../lib/useSEO';

interface HomePageProps {
  navigate: (to: RoutePath) => void;
}

const SOLUTION_CARDS = [
  {
    icon: Users,
    title: 'Looking for Buyers?',
    text: 'We help individuals and organizations explore potential buyer connections when a qualified business opportunity exists.',
  },
  {
    icon: Package,
    title: 'Looking for Suppliers?',
    text: 'We help identify suitable suppliers that may match specific products, services, commercial needs, and business requirements.',
  },
  {
    icon: Handshake,
    title: 'Looking for the Right Business Partner?',
    text: 'We help connect individuals and organizations with potential commercial partners where genuine mutual value may exist.',
  },
  {
    icon: Briefcase,
    title: 'Have a Business Opportunity?',
    text: 'We help examine qualified business opportunities and explore the partners, resources, and commercial relationships they may require.',
  },
  {
    icon: LifeBuoy,
    title: 'Need Business Development Support?',
    text: 'We support the development of professional commercial relationships between suitable parties with shared business interests.',
  },
];

const PRINCIPLES = [
  { icon: ShieldCheck, title: 'Trust', text: 'We believe strong commercial relationships begin with trust.' },
  { icon: Award, title: 'Integrity', text: 'We communicate honestly and avoid claims that cannot be supported.' },
  { icon: Lock, title: 'Confidentiality', text: 'We treat business information and commercial discussions with discretion.' },
  { icon: Eye, title: 'Professionalism', text: 'We approach every opportunity with seriousness, respect, and clear communication.' },
  { icon: HeartHandshake, title: 'Long-Term Relationships', text: 'We value sustainable commercial relationships over short-term transactions.' },
];

const SUPPORT_GROUPS = [
  'Individuals', 'Entrepreneurs', 'Business Owners', 'Buyers',
  'Suppliers', 'Manufacturers', 'Service Providers', 'Investors', 'Organizations',
];

export function HomePage({ navigate }: HomePageProps) {
  useSEO({
    title: 'YMGA Business Development | Qualified Business Opportunities',
    description: 'YMGA Business Development helps individuals and organizations identify qualified business opportunities, connect with the right business partners, and build trusted commercial relationships.',
  });

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions-preview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/60 to-white pointer-events-none" />
        <div className="container-ymga relative py-24 md:py-36">
          <div className="max-w-4xl">
            <p className="section-label animate-fade-in">YMGA Business Development</p>
            <h1 className="mt-6 text-4xl md:text-6xl font-serif font-medium text-navy-900 leading-[1.1] animate-fade-in-up">
              Find the right business partners and build lasting commercial relationships.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-navy-600 leading-relaxed max-w-2xl animate-fade-in-delayed">
              YMGA helps individuals and organizations identify qualified business opportunities, connect with the right business partners, and build trusted commercial relationships through professionalism, integrity, and confidentiality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <button onClick={() => navigate('/contact')} className="btn-primary group">
                Discuss Your Opportunity
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToSolutions} className="btn-secondary">
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section id="solutions-preview" className="py-24 md:py-32 bg-white border-t border-navy-100">
        <div className="container-ymga">
          <div className="max-w-3xl">
            <p className="section-label">What We Offer</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-navy-900">
              How Can We Help?
            </h2>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              Every business need is different. YMGA supports individuals and organizations seeking qualified opportunities, reliable suppliers, potential buyers, suitable partners, and professional business development support.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group p-8 bg-white border border-navy-100 hover:border-navy-300 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-navy-50 text-navy-700 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-serif font-medium text-navy-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => navigate('/solutions')} className="btn-secondary group">
              Explore All Solutions
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24 md:py-32 bg-navy-50 border-t border-navy-100">
        <div className="container-ymga">
          <div className="max-w-3xl">
            <p className="section-label">Our Foundation</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-navy-900">
              Our Principles
            </h2>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              Every relationship we develop is guided by clear professional principles.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-7 bg-white border border-navy-100">
                  <Icon size={28} className="text-gold-600" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-serif font-medium text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 md:py-32 bg-white border-t border-navy-100">
        <div className="container-ymga">
          <div className="max-w-3xl">
            <p className="section-label">Our Clients</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-navy-900">
              Who We Support
            </h2>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              YMGA works with individuals and organizations seeking qualified business opportunities and trusted commercial relationships.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {SUPPORT_GROUPS.map((group) => (
              <span
                key={group}
                className="px-5 py-2.5 bg-navy-50 border border-navy-100 text-sm font-medium text-navy-700 tracking-wide"
              >
                {group}
              </span>
            ))}
          </div>

          <p className="mt-10 text-base text-navy-600 leading-relaxed max-w-2xl">
            Our work is opportunity-driven and not limited to one industry or client type.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-navy-900">
        <div className="container-ymga text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight max-w-3xl mx-auto">
            Let&rsquo;s Discuss Your Opportunity
          </h2>
          <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto">
            Whether you are looking for a buyer, a supplier, a business partner, or support developing a qualified opportunity, we welcome a confidential initial conversation.
          </p>
          <div className="mt-10">
            <button onClick={() => navigate('/contact')} className="btn-primary !bg-white !text-navy-900 hover:!bg-gold-50 group">
              Discuss Your Opportunity
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
