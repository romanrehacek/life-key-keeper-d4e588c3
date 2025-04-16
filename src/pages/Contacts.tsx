
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import ContactList from '@/components/ContactList';

const Contacts = () => {
  return (
    <PageTemplate title="Moje kontakty">
      <ContactList />
    </PageTemplate>
  );
};

export default Contacts;
