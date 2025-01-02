import {
  ArrowDownNarrowWide,
  Contrast,
  FileOutput,
  Focus,
  ImagePlus,
  Layers,
  Maximize2,
  PaintBucket,
  Ratio,
  Sun,
  Wand2,
  type LucideIcon,
} from 'lucide-react';

export interface Enhancement {
  id: string;
  label: string;
  description: string;
  details: string;
  icon: LucideIcon;
  example: {
    before: string;
    after: string;
  };
}

export const ENHANCEMENT_OPTIONS: Enhancement[] = [
  {
    id: 'lighting',
    label: 'Lighting Correction',
    description: 'Optimize exposure and shadows',
    details:
      'Automatically adjusts brightness levels to reveal details in dark areas while preserving highlights. Perfect for rooms with mixed lighting conditions.',
    icon: Sun,
    example: {
      before:
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=300&q=80&auto=format&fit=crop&crop=entropy',
      after:
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=300&q=80&auto=format&fit=crop&crop=entropy&brightness=1.2',
    },
  },
  {
    id: 'contrast',
    label: 'Contrast Enhancement',
    description: 'Improve image contrast and clarity',
    details:
      'Enhances the difference between light and dark areas to make features pop. Ideal for making architectural details stand out.',
    icon: Contrast,
    example: {
      before:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80&auto=format&fit=crop&crop=entropy',
      after:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80&auto=format&fit=crop&crop=entropy&contrast=1.3',
    },
  },
  {
    id: 'hdr',
    label: 'HDR Effect',
    description: 'Enhance dynamic range',
    details:
      'Creates a balanced exposure across bright windows and darker interiors. Essential for rooms with bright outdoor views.',
    icon: ImagePlus,
    example: {
      before:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80&auto=format&fit=crop&crop=entropy',
      after:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80&auto=format&fit=crop&crop=entropy&enhance=true',
    },
  },
  {
    id: 'sharpening',
    label: 'Smart Sharpening',
    description: 'Enhance detail and reduce blur',
    details:
      'Intelligently sharpens important details while reducing noise. Great for highlighting textures in carpets, walls, and furnishings.',
    icon: Focus,
    example: {
      before:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80&auto=format&fit=crop&crop=entropy',
      after:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80&auto=format&fit=crop&crop=entropy&sharpen=100',
    },
  },
  {
    id: 'color',
    label: 'Color Correction',
    description: 'Optimize color balance',
    details:
      'Corrects color casts from different lighting conditions. Makes whites look truly white and ensures accurate color representation.',
    icon: PaintBucket,
    example: {
      before:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80&auto=format&fit=crop&crop=entropy',
      after:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80&auto=format&fit=crop&crop=entropy&saturation=150',
    },
  },
  {
    id: 'auto',
    label: 'AI Auto Enhance',
    description: 'Intelligent automatic adjustments',
    details:
      'Our AI analyzes your photo and applies the perfect combination of enhancements based on real estate photography best practices.',
    icon: Wand2,
    example: {
      before:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80&enhance=true',
    },
  },
  {
    id: 'composition',
    label: 'Composition Fix',
    description: 'Correct perspective and alignment',
    details:
      'Automatically straightens horizons, fixes vertical lines, and corrects lens distortion for professional architectural shots.',
    icon: Layers,
    example: {
      before:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498e?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498e?w=300&q=80&perspective=true',
    },
  },
  {
    id: 'resize',
    label: 'Smart Resize',
    description: 'Optimize image dimensions',
    details:
      'Intelligently resize images while preserving quality and details. Perfect for creating consistent sizes across your portfolio.',
    icon: Maximize2,
    example: {
      before:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80&resize=true',
    },
  },
  {
    id: 'aspectRatio',
    label: 'Aspect Ratio',
    description: 'Adjust image proportions',
    details:
      'Automatically adjust photos to standard real estate aspect ratios while preserving important content.',
    icon: Ratio,
    example: {
      before:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80&aspect=43',
    },
  },
  {
    id: 'optimize',
    label: 'File Optimization',
    description: 'Reduce file size',
    details:
      'Compress images for web use while maintaining visual quality. Ideal for faster website loading.',
    icon: FileOutput,
    example: {
      before:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80&optimize=true',
    },
  },
  {
    id: 'watermark',
    label: 'Watermark',
    description: 'Add branding overlay',
    details:
      'Apply customizable watermarks to protect your photos while maintaining professional appearance.',
    icon: PaintBucket,
    example: {
      before:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80&watermark=true',
    },
  },
  {
    id: 'compress',
    label: 'Smart Compression',
    description: 'Advanced size reduction',
    details:
      'Uses AI to intelligently compress images, preserving quality in important areas while reducing file size.',
    icon: ArrowDownNarrowWide,
    example: {
      before:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80',
      after:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80&compress=true',
    },
  },
] as const;
