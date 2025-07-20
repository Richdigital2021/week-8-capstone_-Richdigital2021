// src/components/Testimonials.jsx
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Testimonials() {
  const reviews = [
    {
      quote: "JobTracker kept me on track—I got 3 interviews last week.",
      name: "Olivia James",
      title: "Frontend Dev",
      image: "/avatars/avatar1.jpg", // no need for /public
    },
    {
      quote: "The reminders are a lifesaver. I never miss anything now!",
      name: "Tolani Ade",
      title: "Backend Engineer",
      image: "/avatars/avatar2.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-5xl space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          What Our Users Say
        </h2>

        {/* Flex container for cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {reviews.map((r) => (
            <TestimonialCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
