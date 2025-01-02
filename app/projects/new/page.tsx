'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, Globe, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewProjectPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      location: formData.get('location'),
      listingUrl: formData.get('listingUrl'),
    };

    // TODO: Create project in database
    await new Promise((resolve) => setTimeout(resolve, 1000));

    router.push('/projects');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create New Project</h1>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Project Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter project name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter property location"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="listingUrl" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Listing URL
              </Label>
              <Input
                id="listingUrl"
                name="listingUrl"
                type="url"
                placeholder="Enter property listing URL (optional)"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Project...' : 'Create Project'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
