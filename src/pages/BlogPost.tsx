
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

// Sample blog post data
const blogPost = {
  id: "1",
  title: "Prečo je dôležité myslieť na dedičstvo v digitálnom svete",
  content: `
    <p>V súčasnej dobe, keď je veľká časť nášho života digitalizovaná, je dôležité myslieť aj na to, čo sa stane s našimi digitálnymi aktívami v prípade neočakávaných udalostí. Na rozdiel od fyzického majetku, ktorý je ľahko identifikovateľný a prevoditeľný na dedičov, digitálne aktíva a prístupové údaje často zostávajú skryté a môžu byť pre pozostalých nedostupné.</p>
    
    <h2>Čo tvorí digitálne dedičstvo?</h2>
    
    <p>Digitálne dedičstvo zahŕňa širokú škálu aktív a informácií:</p>
    
    <ul>
      <li>Účty na sociálnych sieťach a digitálne spomienky</li>
      <li>E-mailové účty a komunikačné platformy</li>
      <li>Cloudové úložiská s fotkami, videami a dokumentmi</li>
      <li>Kryptomeny a digitálne finančné aktíva</li>
      <li>Online účty s kreditom alebo predplatenými službami</li>
      <li>Prístupové údaje k dôležitým službám a zariadeniam</li>
    </ul>
    
    <h2>Prečo je digitálne dedičstvo dôležité?</h2>
    
    <p>Nedostatočne zabezpečené digitálne dedičstvo môže viesť k viacerým problémom:</p>
    
    <ol>
      <li><strong>Strata cenných spomienok</strong> - Roky fotografií, videí a správ môžu byť nenávratne stratené, ak k nim nikto nemá prístup.</li>
      <li><strong>Finančné straty</strong> - Kryptomeny, zostatky na online účtoch či predplatné služby môžu predstavovať značnú hodnotu.</li>
      <li><strong>Administratívna záťaž</strong> - Pozostalí môžu stráviť mesiace zisťovaním a rušením rôznych účtov a služieb.</li>
      <li><strong>Ochrana súkromia</strong> - Bez jasných inštrukcií môžu byť zverejnené informácie, ktoré ste chceli uchovať v súkromí.</li>
    </ol>
    
    <h2>Ako zabezpečiť digitálne dedičstvo</h2>
    
    <p>Existuje niekoľko efektívnych spôsobov, ako zabezpečiť svoje digitálne dedičstvo:</p>
    
    <ol>
      <li><strong>Vytvorenie digitálneho inventára</strong> - Skompletizujte zoznam všetkých vašich digitálnych účtov a aktív.</li>
      <li><strong>Zabezpečené uloženie prístupových údajov</strong> - Využite služby ako Životný kľúč na bezpečné uloženie hesiel a prístupových údajov.</li>
      <li><strong>Stanovte jasnú stratégiu</strong> - Určite, kto bude mať prístup k vašim digitálnym aktívam a za akých okolností.</li>
      <li><strong>Zvážte právne aspekty</strong> - Niektoré krajiny už majú legislatívu týkajúcu sa digitálneho dedičstva, informujte sa o možnostiach vo vašej krajine.</li>
    </ol>
    
    <h2>Záver</h2>
    
    <p>Digitálne dedičstvo je čoraz dôležitejšou súčasťou nášho osobného odkazu. Tak ako si dávame záležať na zabezpečení fyzického majetku, je potrebné venovať pozornosť aj tomu digitálnemu. Služby ako Životný kľúč vám môžu pomôcť zabezpečiť, že vaše digitálne aktíva budú spravované podľa vašich prianí, a vaši blízki nebudú musieť čeliť zbytočným komplikáciám v už aj tak ťažkej situácii.</p>
  `,
  author: "Michal Novák",
  date: "15.4.2025",
  readTime: "8 min",
  category: "Digitálne dedičstvo",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
};

const BlogPost = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the specific post based on the ID
  // For now, we'll just use our sample post
  
  return (
    <PageTemplate title={blogPost.title}>
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-lifekey-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť na blog
        </Link>
        
        <div className="mb-8">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 items-center mb-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {blogPost.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {blogPost.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {blogPost.readTime}
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            {blogPost.category}
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{blogPost.title}</h1>
        
        <div 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
        
        <div className="mt-16 border-t pt-8">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Zdieľať článok:</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center border-t pt-8">
          <p className="text-center sm:text-left">
            Chcete už teraz zabezpečiť svoje digitálne dedičstvo?
          </p>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue" asChild>
            <Link to="/register">
              Začnite s Životným kľúčom
            </Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BlogPost;
