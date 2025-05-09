
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageTemplateProps {
  title?: string;
  children: React.ReactNode;
}

const PageTemplate = ({ title, children }: PageTemplateProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-12 px-4 sm:px-6">
          {title && <h1 className="text-3xl font-bold mb-8 mx-auto max-w-4xl">{title}</h1>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
