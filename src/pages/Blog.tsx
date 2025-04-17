
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Helmet } from 'react-helmet';
import PageTemplate from '@/components/PageTemplate';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Prečo je dôležité myslieť na dedičstvo v digitálnom svete",
    excerpt: "V dnešnej dobe máme veľa digitálnych aktív, ktoré je potrebné zabezpečiť pre prípad neočakávaných udalostí.",
    date: "15.4.2025",
    category: "Digitálne dedičstvo",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Ako ochrániť svoje digitálne aktíva v prípade núdze",
    excerpt: "Kryptomeny, online účty a ďalšie digitálne aktíva potrebujú špeciálne zabezpečenie a plán pre prípad núdze.",
    date: "10.4.2025",
    category: "Bezpečnosť",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Ako pripraviť rodinu na nečakané udalosti",
    excerpt: "Tipy a rady, ako zabezpečiť, aby vaši blízki mali prístup k dôležitým informáciám v prípade potreby.",
    date: "5.4.2025",
    category: "Rodinné plánovanie",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Životné poistenie v digitálnej dobe",
    excerpt: "Ako sa mení koncept životného poistenia a zabezpečenia rodiny v ére digitálnych technológií.",
    date: "1.4.2025",
    category: "Financie",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "5 vecí, ktoré by mal obsahovať každý digitálny testament",
    excerpt: "Praktický návod na vytvorenie digitálneho testamentu, ktorý pokryje všetky vaše digitálne aktíva.",
    date: "28.3.2025",
    category: "Návody",
    image: "https://images.unsplash.com/photo-1551290464-66cf567173d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Bezpečnostné riziká v digitálnom svete",
    excerpt: "Ako chrániť svoje digitálne aktíva pred hackermi a online podvodníkmi.",
    date: "24.3.2025",
    category: "Bezpečnosť",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Prečo používať dvojfaktorovú autentifikáciu",
    excerpt: "Vyššia úroveň zabezpečenia pre vaše online účty je nevyhnutnosťou v dnešnom svete.",
    date: "20.3.2025",
    category: "Bezpečnosť",
    image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "8",
    title: "Ako nastaviť správne notifikácie v prípade núdze",
    excerpt: "Nastavenie pravidelných kontrol a automatických upozornení pre vašich blízkych.",
    date: "16.3.2025",
    category: "Návody",
    image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "9",
    title: "Zálohovanie dát - prečo je dôležité a ako naň",
    excerpt: "Stratégie a tipy na efektívne zálohovanie všetkých vašich dôležitých dát.",
    date: "12.3.2025",
    category: "Návody",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "10",
    title: "Digitálne dedičstvo a rodinná pamäť",
    excerpt: "Ako uchovať rodinné fotografie, videá a spomienky pre budúce generácie.",
    date: "8.3.2025",
    category: "Digitálne dedičstvo",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ITEMS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstItem, indexOfLastItem);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <PageTemplate title="Blog">
      <Helmet>
        <title>Blog o digitálnom dedičstve | Životný kľúč</title>
        <meta name="description" content="Novinky a články o digitálnom dedičstve, bezpečnosti online účtov a ochrane digitálnych aktív." />
        <meta name="keywords" content="digitálne dedičstvo, online bezpečnosť, zabezpečenie účtov, životný kľúč" />
      </Helmet>
      
      <div className="space-y-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPosts.slice(0, 1).map((post) => (
            <div key={post.id} className="col-span-1 md:col-span-2">
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-96 object-cover transition duration-300 group-hover:scale-105"
                  loading="eager"
                  width="1200"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <div className="text-white space-y-2">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-lifekey-teal/80 inline-block mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">{post.title}</h2>
                    <p className="text-white/90">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-white/70">{post.date}</span>
                      <Button asChild size="sm" className="bg-lifekey-teal hover:bg-lifekey-blue">
                        <Link to={`/blog/${post.id}`}>Čítať viac</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.slice(1).map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
                width="400"
                height="200"
              />
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted inline-block mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button asChild variant="link" className="text-lifekey-teal hover:text-lifekey-blue p-0">
                    <Link to={`/blog/${post.id}`}>Čítať viac</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </PageTemplate>
  );
};

export default Blog;
