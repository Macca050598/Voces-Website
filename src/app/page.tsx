'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
} 