import { ShieldCheck, Award, Lock, Eye, HeartHandshake, ArrowRight } from 'lucide-react';
import type { RoutePath } from '../lib/router';
import { useSEO } from '../lib/useSEO';
import { PageHero } from '../components/PageHero';

interface AboutPageProps {
  navigate: (to: RoutePath) => void;
}

const PRINCIPLES = [
  { icon: ShieldCheck, title: 'Trust', text: 'We believe strong commercial relationships begin with trust.' },
  { icon: Award, title: 'Integrity', text: 'We communicate honestly and avoid claims that cannot be supported.' },
  { icon: Lock, title: 'Confidentiality', text: 'We treat business information and commercial discussions with discretion.' },
  { icon: Eye, title: 'Professionalism', text: 'We approach every opportunity with seriousness, respect, and clear communication.' },
  { icon: HeartHandshake, title: 'Long-Term Relationships', text: 'We value sustainable commercial relationships over short-term transactions.' },
];

const SECTIONS = [
  {
    heading: 'Who We Are',
    paragraphs: [
      'We are a business development company specializing in qualified business opportunities.',
      'We work with individuals and organizations that need access to suitable buyers, suppliers, service providers, commercial partners, and business opportunities.',
    ],
  },
  {
    heading: 'What We Do',
    paragraphs: [
      'We help clients explore qualified business opportunities, identify suitable commercial partners, and support the development of professional long-term business relationships.',
      'Our role is to create valuable connections where a genuine business fit may exist.',
    ],
  },
  {
    heading: 'Why We Exist',
    paragraphs: [
      'Many valuable business opportunities never move forward because the right people, organizations, buyers, suppliers, or service providers do not connect at the right time.',
      'YMGA exists to help bridge that gap through professionalism, integrity, confidentiality, and focused business development.',
    ],
  },
];

export function AboutPage({ navigate }: AboutPageProps) {
  useSEO({
    title: 'About YMGA Business Development',
    description: 'YMGA Business Development helps individuals and organizations identify qualified business opportunities, connect with the right business partners, and build trusted commercial relationships.',
  });

  return (
    <>
      <PageHero
        label="About"
        title="About YMGA"
        intro="YMGA Business Development helps individuals and organizations identify qualified business opportunities, connect with the right business partners, and build trusted commercial relationships."
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="container-ymga">
          <div className="max-w-3xl space-y-20">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <p className="section-label">{section.heading}</p>
                <h2 className="mt-4 text-2xl md:text-3xl font-serif font-medium text-navy-900">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-navy-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-navy-50 border-t border-navy-100">
        <div className="container-ymga">
          <div className="max-w-3xl">
            <p className="section-label">Our Foundation</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-navy-900">
              Our Principles
            </h2>
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

      <section className="py-20 md:py-28 bg-navy-900">
        <div className="container-ymga text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-white">
            Every opportunity begins with a conversation.
          </h2>
          <div className="mt-8">
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
