// src/components/Features.jsx
 import { FeatureCard } from '@/components/ui/FeatureCard';

export default function Features() {
  const features = [
    { icon: '📋', title: 'Central App Tracker', description: 'All your applications in one place—company, role, date, status.' },
    { icon: '⏰', title: 'Interview Reminders', description: 'Never miss an interview with smart alerts.' },
    { icon: '📈', title: 'Analytics Dashboard', description: 'Track your success rate and progress visually.' },
  ];
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map(f => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
}
