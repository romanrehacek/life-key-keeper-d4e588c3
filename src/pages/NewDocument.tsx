
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import PageTemplate from '@/components/PageTemplate';
import DocumentEditor from '@/components/DocumentEditor';

const NewDocument = () => {
  const { toast } = useToast();
  const [isReady, setIsReady] = useState(true);
  
  return (
    <PageTemplate title="Nový dokument">
      {isReady ? (
        <DocumentEditor />
      ) : (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lifekey-teal"></div>
        </div>
      )}
    </PageTemplate>
  );
};

export default NewDocument;
