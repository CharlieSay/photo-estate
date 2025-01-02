import { Photo, Project } from '@/types/project';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Luxury Villa 1',
    location: 'Beverly Hills, CA',
    photoCount: 12,
    coverImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80',
    listingUrl:
      'https://www.rightmove.co.uk/properties/151938803#/?channel=RES_BUY',
    updatedAt: '2024-01-02T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Modern Penthouse',
    location: 'Manhattan, NY',
    photoCount: 15,
    coverImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
    listingUrl:
      'https://www.rightmove.co.uk/properties/151938803#/?channel=RES_BUY',
    updatedAt: '2024-01-02T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Beachfront Estate',
    location: 'Malibu, CA',
    photoCount: 20,
    coverImage:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80',
    listingUrl:
      'https://www.rightmove.co.uk/properties/151938803#/?channel=RES_BUY',
    updatedAt: '2024-01-02T00:00:00.000Z',
  },
];

export const mockPhotos: Photo[] = [
  {
    id: 1,
    projectId: 1,
    // Dark, underexposed image
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80',
    // Bright, well-lit image
    enhancedUrl:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    status: 'completed',
    metadata: {
      size: 2048576,
      dimensions: { width: 1920, height: 1080 },
      enhancements: ['lighting', 'contrast', 'color'],
    },
    createdAt: '2024-01-02T00:00:00.000Z',
  },
  {
    id: 2,
    projectId: 1,
    // Dull colors
    url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    // Vibrant colors
    enhancedUrl:
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
    status: 'completed',
    metadata: {
      size: 1843200,
      dimensions: { width: 1920, height: 1080 },
      enhancements: ['auto'],
    },
    createdAt: '2024-01-02T00:00:00.000Z',
  },
];
