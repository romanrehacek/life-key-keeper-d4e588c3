
export interface Recipient {
  id: string;
  name: string;
  email: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'household' | 'finance' | 'crypto' | 'family' | 'instructions';
  lastUpdated: string;
  recipients: Recipient[];
  createdAt: string;
  isEncrypted: boolean;
}

export const typeLabels = {
  household: 'Domácnosť',
  finance: 'Financie',
  crypto: 'Kryptomeny',
  family: 'Rodina a kontakty',
  instructions: 'Čo robiť, ak...'
};

export const typeColors = {
  household: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  crypto: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  family: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  instructions: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};
