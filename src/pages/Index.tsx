
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import BlogSection from '@/components/home/BlogSection';
import CallToAction from '@/components/home/CallToAction';

const latestBlogPosts = [
  {
    id: 1,
    title: "Ako zabezpečiť svoje digitálne dedičstvo",
    excerpt: "V dnešnej dobe je dôležité myslieť aj na to, čo sa stane s našimi digitálnymi účtami...",
    date: "2024-04-15",
    image: "/assets/digital-legacy.jpg"
  },
  {
    id: 2,
    title: "Prečo je dôležité mať plán",
    excerpt: "Plánovanie budúcnosti nie je príjemná téma, ale je nevyhnutné...",
    date: "2024-04-10",
    image: "/assets/planning.jpg"
  },
  {
    id: 3,
    title: "Bezpečnosť na prvom mieste",
    excerpt: "Zabezpečenie citlivých informácií je kľúčové...",
    date: "2024-04-05",
    image: "/assets/security.jpg"
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <BlogSection posts={latestBlogPosts} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
