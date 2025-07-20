import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold mb-8">Simple, Transparent Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="border rounded-lg p-6 w-full md:w-1/3 bg-white dark:bg-gray-800 shadow">
          <h3 className="text-xl font-bold mb-2">Free Plan</h3>
          <p className="mb-4">Track up to 10 jobs/month</p>
          <Button className="w-full">Start for Free</Button>
        </div>
        <div className="border rounded-lg p-6 w-full md:w-1/3 bg-white dark:bg-gray-800 shadow">
          <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
          <p className="mb-4">Unlimited job tracking + reminders</p>
          <Button className="w-full">Start Free Trial</Button>
        </div>
      </div>
    </section>
  );
}
