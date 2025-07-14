import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  meta_description: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export const usePages = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPages = async () => {
    try {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPages(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch pages",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createPage = async (pageData: Omit<Page, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('pages')
        .insert([pageData])
        .select()
        .single();

      if (error) throw error;
      
      setPages(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Page created successfully"
      });
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create page",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updatePage = async (id: string, updates: Partial<Page>) => {
    try {
      const { data, error } = await supabase
        .from('pages')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setPages(prev => prev.map(page => page.id === id ? data : page));
      toast({
        title: "Success",
        description: "Page updated successfully"
      });
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update page",
        variant: "destructive"
      });
      throw error;
    }
  };

  const deletePage = async (id: string) => {
    try {
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setPages(prev => prev.filter(page => page.id !== id));
      toast({
        title: "Success",
        description: "Page deleted successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete page",
        variant: "destructive"
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return {
    pages,
    loading,
    createPage,
    updatePage,
    deletePage,
    refetch: fetchPages
  };
};