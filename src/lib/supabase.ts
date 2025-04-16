
import { createClient } from '@supabase/supabase-js';

// Supabase client initialization with environment variables
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Document types
export type DocumentType = 'household' | 'finance' | 'crypto' | 'family' | 'instructions';

// Document interface matching our UI components
export interface Document {
  id: string;
  title: string;
  description: string;
  type: DocumentType;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}

// Document API
export const documentsApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('updated_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
  
  async getById(id: string) {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  async create(document: Omit<Document, 'id' | 'created_at' | 'updated_at' | 'user_id'>) {
    const { data, error } = await supabase
      .from('documents')
      .insert([{
        ...document,
        user_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  async update(id: string, document: Partial<Omit<Document, 'id' | 'created_at' | 'user_id'>>) {
    const { data, error } = await supabase
      .from('documents')
      .update({
        ...document,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  async delete(id: string) {
    const { error } = await supabase
      .from('documents')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
};

// User settings API
export const userSettingsApi = {
  async get() {
    const { data, error } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },
  
  async update(settings: Record<string, any>) {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    const existingSettings = await this.get();
    
    if (existingSettings) {
      const { data, error } = await supabase
        .from('user_settings')
        .update({
          settings: { ...existingSettings.settings, ...settings }
        })
        .eq('user_id', userId)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('user_settings')
        .insert([{
          user_id: userId,
          settings
        }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  }
};
