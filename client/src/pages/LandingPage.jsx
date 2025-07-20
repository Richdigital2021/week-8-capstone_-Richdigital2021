// src/pages/LandingPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingNavbar from "@/components/LandingNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PASSection from "@/components/PASSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AppLinks from '@/components/AppLinks';





const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <LandingNavbar />

      <motion.section id="home" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Hero />
      </motion.section>

      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <About />
      </motion.section>

      <motion.section id="pas" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <PASSection />
      </motion.section>

      <motion.section id="features" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Features />
      </motion.section>

      <motion.section id="testimonials" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Testimonials />
      </motion.section>

      <motion.section id="pricing" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Pricing />
      </motion.section>

      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <ContactForm />
      </motion.section>

      <motion.section className="bg-white dark:bg-gray-800 py-20 px-6 transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h4 className="font-semibold text-lg">Is JobTrackr free to use?</h4>
            <p className="text-gray-600 dark:text-gray-300">Yes! Our basic plan is 100% free with no credit card required.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Can I set reminders?</h4>
            <p className="text-gray-600 dark:text-gray-300">Absolutely. You’ll get email or in-app reminders before deadlines.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Is my data secure?</h4>
            <p className="text-gray-600 dark:text-gray-300">We use bank-level encryption and 2FA to protect your information.</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-indigo-50 dark:bg-gray-700 py-16 px-6 text-center transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-bold mb-4">Join Our Job Tips Newsletter</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700 dark:text-gray-200">Stay updated with the latest job hunting tips, tools, and resources.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 w-full bg-white dark:bg-gray-800 dark:text-white"
          />
          <Button type="submit" className="px-6 py-3 bg-indigo-600 text-white">Subscribe</Button>
        </form>
      </motion.section>

      <motion.section className="text-center py-16 px-6 bg-indigo-600 text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-semibold mb-4">Ready to take control?</h2>
        <p className="max-w-xl mx-auto mb-8">Join thousands of job seekers using JobTrackr to land their next opportunity.</p>
        <Link to="/signup">
          <Button size="lg" className="bg-white text-indigo-600 font-semibold text-lg px-8 py-6 hover:bg-gray-200">Get Started Free</Button>
        </Link>
      </motion.section>

      <motion.section className="bg-white dark:bg-gray-900 py-16 px-6 text-center transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-3xl font-bold mb-6">Use JobTrackr on the Go</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">Download our mobile app and track your applications anytime, anywhere.</p>
        <div className="flex justify-center gap-6">
          < AppLinks />
        </div>
        
      </motion.section>
      


      <Footer />
    </div>
  );
}
