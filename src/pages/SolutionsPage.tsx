import { ArrowRight, Users, Package, Handshake, Briefcase, LifeBuoy } from 'lucide-react';
import type { RoutePath } from '../lib/router';
import { useSEO } from '../lib/useSEO';

interface SolutionsPageProps {
  navigate: (to: RoutePath) => void;
}

const SOLUTIONS = [
  {
    icon: Users,
    heading: 'Looking for Buyers?',
    text: 'YMGA helps individuals and organizations explore potential buyer connections for products, services, projects, and qualified business opportunities.',
    subtext: 'We focus on identifying situations where a genuine commercial fit may exist.',
    cta: 'Discuss Your Opportunity',
  },
  {
    icon: Package,
    heading: 'Looking for Suppliers?',
    text: 'YMGA helps clients explore suitable supplier options for products, materials, services, equipment, and other commercial requirements.',
    subtext: 'We focus on relevance, compatibility, and the potential for a professional business relationship.',
    cta: 'Discuss Your Requirement',
  },
  {
    icon: Handshake,
    heading: 'Looking for the Right Business Partner?',
    text: 'YMGA helps individuals and organizations explore relationships with potential distributors, manufacturers, service providers, investors, commercial partners, and other suitable counterparties.',
    cta: 'Find the Right Partner',
  },
  {
    icon: Briefcase,
    heading: 'Have a Business Opportunity?',
    text: 'YMGA helps clients examine qualified business opportunities and identify the types of partners, suppliers, buyers, services, or resources that may be required to move them forward.',
    cta: 'Tell Us About Your Opportunity',
  },
  {
    icon: LifeBuoy,
    heading: 'Need Business Development Support?',
    text: 'YMGA supports professional commercial discussions, partner introductions, relationship development, and communication between parties where a potential business fit exists.',
    cta: 'Start a Confidential Discussion',
  },
];

export function SolutionsPage({ navigate }: SolutionsPageProps) {
  useSEO({
    title: 'Business Development Solutions | YMGA',
    description: 'YMGA supports individuals and organizations facing practical business development needs. We focus on qualified opportunities, suitable connections, professional communication, and trusted commercial relationships.',
  });

  return (
    <>
      <section className="bg-navy-50 border-b border-navy-100">
        <div className="container-ymga py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="section-label animate-fade-in">Solutions</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-navy-900 leading-tight animate-fade-in-up">
              Business development solutions built around your needs.
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed animate-fade-in-delayed">
              YMGA supports individuals and organizations facing practical business development needs. We focus on qualified opportunities, suitable connections, professional communication, and trusted commercial relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container-ymga">
          <div className="space-y-20">
            {SOLUTIONS.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.heading}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    i !== 0 ? 'pt-20 border-t border-navy-100' : ''
                  }`}
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex items-center justify-center bg-navy-900 text-white shrink-0">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                      <span className="font-serif text-2xl text-navy-200">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy-900">
                      {solution.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      <p className="text-lg text-navy-600 leading-relaxed">
                        {solution.text}
                      </p>
                      {solution.subtext && (
                        <p className="text-base text-navy-500 leading-relaxed">
                          {solution.subtext}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="mt-7 inline-flex items-center text-sm font-medium text-navy-900 border-b border-gold-500 pb-1 hover:border-navy-900 transition-colors group"
                    >
                      {solution.cta}
                      <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-navy-900">
        <div className="container-ymga text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight max-w-3xl mx-auto">
            Every opportunity begins with a conversation.
          </h2>
          <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto">
            Tell us what you are looking for, what you are offering, or what business challenge you are trying to solve.
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
