// src/components/PASSection.jsx
import { Button } from "@/components/ui/button";

export default function PASSection() {
  return (
    <section id="pas" className="py-20 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Struggling to Keep Track?</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          You’re applying to countless roles, juggling emails, interviews, and deadlines—only to lose track and miss out.
        </p>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          It’s overwhelming, frustrating, and often demotivating—clouding your confidence and delaying your success.
        </p>
        <p className="text-xl font-semibold">
          JobTracker solves this by giving you one dashboard to log, track, remind, and analyze all your applications—ensuring nothing falls through the cracks.
        </p>
        <Button size="lg" className="mt-4">Start Tracking Now</Button>
      </div>
    </section>
  );
}
