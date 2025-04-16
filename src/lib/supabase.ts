
import { supabase } from '@/integrations/supabase/client';

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
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('updated_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  },
  
  async getById(id: string) {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error fetching document with id ${id}:`, error);
      throw error;
    }
  },
  
  async create(document: Omit<Document, 'id' | 'created_at' | 'updated_at' | 'user_id'>) {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id || 'anonymous';
      
      const { data, error } = await supabase
        .from('documents')
        .insert([{
          ...document,
          user_id: userId
        }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating document:', error);
      throw error;
    }
  },
  
  async update(id: string, document: Partial<Omit<Document, 'id' | 'created_at' | 'user_id'>>) {
    try {
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
    } catch (error) {
      console.error(`Error updating document with id ${id}:`, error);
      throw error;
    }
  },
  
  async delete(id: string) {
    try {
      const { error } = await supabase
        .from('documents')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error(`Error deleting document with id ${id}:`, error);
      throw error;
    }
  }
};

// User settings API
export const userSettingsApi = {
  async get() {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id || 'anonymous';
      
      const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user settings:', error);
      return null;
    }
  },
  
  async update(settings: Record<string, any>) {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id || 'anonymous';
      
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
    } catch (error) {
      console.error('Error updating user settings:', error);
      throw error;
    }
  }
};
