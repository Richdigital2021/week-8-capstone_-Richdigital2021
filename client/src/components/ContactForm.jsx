// src/components/ContactForm.jsx
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-lg text-center space-y-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="grid gap-4">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <textarea className="textarea" placeholder="Message" rows={4}></textarea>
          <Button size="lg">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
