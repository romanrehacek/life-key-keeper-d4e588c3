
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import DocumentList from '@/components/DocumentList';
import { useLanguage } from '@/contexts/LanguageContext';

const Documents = () => {
  const { t } = useLanguage();
  
  return (
    <PageTemplate title="Moje dokumenty">
      <DocumentList />
    </PageTemplate>
  );
};

export default Documents;
