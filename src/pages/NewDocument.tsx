
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import DocumentEditor from '@/components/DocumentEditor';

const NewDocument = () => {
  return (
    <PageTemplate title="Nový dokument">
      <DocumentEditor />
    </PageTemplate>
  );
};

export default NewDocument;
