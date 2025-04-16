
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Document from './Document';
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from 'lucide-react';
import { documentsApi } from "@/lib/supabase";
import { useQuery } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import { DocumentProps } from './Document';

const DocumentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  
  const { data: documents, isLoading, isError, refetch } = useQuery({
    queryKey: ['documents'],
    queryFn: documentsApi.getAll,
  });

  // Handle fetching error
  useEffect(() => {
    if (isError) {
      toast({
        title: "Chyba pri načítaní dokumentov",
        description: "Nepodarilo sa načítať vaše dokumenty. Skúste to znova neskôr.",
        variant: "destructive",
      });
    }
  }, [isError, toast]);

  // Filter documents based on search term
  const filteredDocuments = documents?.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteDocument = async (id: string) => {
    try {
      await documentsApi.delete(id);
      toast({
        title: "Dokument odstránený",
        description: "Dokument bol úspešne odstránený.",
      });
      refetch();
    } catch (error) {
      console.error('Error deleting document:', error);
      toast({
        title: "Chyba pri odstraňovaní",
        description: "Nepodarilo sa odstrániť dokument. Skúste to znova neskôr.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-semibold">Vaše dokumenty</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Hľadať dokumenty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Link to="/documents/new">
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue whitespace-nowrap">
              <PlusCircle className="h-4 w-4 mr-2" />
              Nový dokument
            </Button>
          </Link>
        </div>
      </div>
      
      {isLoading ? (
        <div className="py-10 text-center text-muted-foreground">Načítavajú sa dokumenty...</div>
      ) : filteredDocuments?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(doc => (
            <Document
              key={doc.id}
              id={doc.id}
              title={doc.title}
              description={doc.description}
              type={doc.type}
              lastUpdated={new Date(doc.updated_at).toLocaleDateString('sk-SK')}
              recipients={2} // This should come from relations in the future
              onDelete={() => handleDeleteDocument(doc.id)}
            />
          ))}
        </div>
      ) : (
        <div className="py-10 text-center">
          {searchTerm ? (
            <p className="text-muted-foreground">
              Nenašli sa žiadne dokumenty zodpovedajúce vyhľadávaniu "{searchTerm}"
            </p>
          ) : (
            <div className="space-y-3">
              <p className="text-muted-foreground">Zatiaľ nemáte žiadne dokumenty</p>
              <Link to="/documents/new">
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Vytvoriť prvý dokument
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentList;
