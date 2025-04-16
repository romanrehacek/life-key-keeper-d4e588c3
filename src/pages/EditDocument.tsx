
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import PageTemplate from '@/components/PageTemplate';
import DocumentEditor from '@/components/DocumentEditor';
import { documentsApi } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

const EditDocument = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const { data: document, isLoading, isError, error } = useQuery({
    queryKey: ['document', id],
    queryFn: () => documentsApi.getById(id as string),
    enabled: !!id,
    retry: 1
  });

  // Show error if document not found
  useEffect(() => {
    if (isError) {
      console.error("Error fetching document:", error);
      toast({
        title: "Dokument nenájdený",
        description: "Požadovaný dokument sa nepodarilo načítať.",
        variant: "destructive",
      });
    }
  }, [isError, error, toast]);

  if (isLoading) {
    return (
      <PageTemplate title="Načítavam dokument...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lifekey-teal"></div>
        </div>
      </PageTemplate>
    );
  }

  if (isError || !document) {
    return <Navigate to="/documents" replace />;
  }

  return (
    <PageTemplate title="Upraviť dokument">
      <DocumentEditor 
        id={id}
        initialValues={{
          title: document.title,
          description: document.description,
          type: document.type,
          content: document.content,
        }}
      />
    </PageTemplate>
  );
};

export default EditDocument;
