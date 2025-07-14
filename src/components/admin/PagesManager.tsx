import { useState } from 'react';
import { usePages, Page } from '@/hooks/usePages';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageForm } from './PageForm';
import { Plus, Edit, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const PagesManager = () => {
  const { pages, loading, deletePage } = usePages();
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleEdit = (page: Page) => {
    setEditingPage(page);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this page?')) {
      await deletePage(id);
    }
  };

  const closeDialog = () => {
    setEditingPage(null);
    setShowCreateForm(false);
  };

  if (loading) {
    return <div>Loading pages...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Pages</CardTitle>
            <CardDescription>Manage your website pages</CardDescription>
          </div>
          <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Page
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Page</DialogTitle>
                <DialogDescription>
                  Add a new page to your website
                </DialogDescription>
              </DialogHeader>
              <PageForm onSuccess={closeDialog} />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>{page.slug}</TableCell>
                <TableCell>
                  <Badge variant={page.published ? 'default' : 'secondary'}>
                    {page.published ? 'Published' : 'Draft'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(page.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Dialog open={editingPage?.id === page.id} onOpenChange={(open) => !open && setEditingPage(null)}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(page)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Page</DialogTitle>
                          <DialogDescription>
                            Make changes to your page
                          </DialogDescription>
                        </DialogHeader>
                        <PageForm page={editingPage} onSuccess={closeDialog} />
                      </DialogContent>
                    </Dialog>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(page.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};