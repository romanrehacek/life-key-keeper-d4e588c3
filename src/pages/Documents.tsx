
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import DocumentList from '@/components/DocumentList';
import { useLanguage } from '@/contexts/LanguageContext';

const Documents = () => {
  const { t } = useLanguage();
  
  return (
    <PageTemplate title={t("document.list.title") || "My Documents"}>
      <DocumentList />
    </PageTemplate>
  );
};

export default Documents;
