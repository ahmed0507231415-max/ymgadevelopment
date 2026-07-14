import { Mail, Database, Lock, Ban, FileCheck, MessageSquare } from 'lucide-react';
import type { RoutePath } from '../lib/router';
import { useSEO } from '../lib/useSEO';
import { PageHero } from '../components/PageHero';

interface PrivacyPageProps {
  navigate: (to: RoutePath) => void;
}

const SECTIONS = [
  {
    icon: Mail,
    heading: 'Information We Receive',
    paragraphs: [
      'YMGA may receive information submitted through contact forms, emails, meetings, telephone calls, and other direct business communications.',
      'This may include names, contact details, company information, commercial requirements, product or service information, and details relating to a potential business opportunity.',
    ],
  },
  {
    icon: Database,
    heading: 'How Information Is Used',
    paragraphs: [
      'Information is used only to review inquiries, assess potential business relevance, communicate with interested parties, and support possible business development discussions.',
    ],
  },
  {
    icon: Lock,
    heading: 'Confidentiality',
    paragraphs: [
      'YMGA treats business information with professional discretion.',
      'Information will not be intentionally disclosed to unrelated parties without a legitimate business reason or appropriate permission.',
    ],
  },
  {
    icon: Ban,
    heading: 'No Sale of Information',
    paragraphs: [
      'YMGA does not sell personal information, business contact information, or confidential opportunity information.',
    ],
  },
  {
    icon: FileCheck,
    heading: 'Data Accuracy',
    paragraphs: [
      'Individuals submitting information are responsible for ensuring that the information they provide is accurate and that they are authorized to share it.',
    ],
  },
  {
    icon: MessageSquare,
    heading: 'Contact',
    paragraphs: [
      'Questions relating to privacy or confidentiality may be submitted through the Contact page.',
    ],
  },
];

export function PrivacyPage({ navigate }: PrivacyPageProps) {
  useSEO({
    title: 'Privacy & Confidentiality | YMGA',
    description: 'YMGA treats business information with professional discretion. Learn how YMGA receives, uses, and protects information submitted through contact forms and direct business communications.',
  });

  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy & Confidentiality"
        intro="YMGA is committed to handling business information with professionalism, discretion, and care."
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="container-ymga">
          <div className="max-w-3xl space-y-16">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.heading}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-navy-50 text-navy-700 shrink-0">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif font-medium text-navy-900">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="mt-4 ml-[52px] space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-base md:text-lg text-navy-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-3xl">
            <div className="p-6 bg-navy-50 border-l-4 border-gold-500">
              <p className="text-sm text-navy-700 leading-relaxed">
                This page provides a general statement of YMGA&rsquo;s privacy and confidentiality practices. Formal agreements may be used when a business opportunity requires additional protection.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center text-sm font-medium text-navy-900 border-b border-gold-500 pb-1 hover:border-navy-900 transition-colors"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
