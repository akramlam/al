/**
 * Main Page - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Single-page application with all sections
 */

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </main>
  );
}
