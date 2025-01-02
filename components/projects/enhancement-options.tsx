'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ENHANCEMENT_OPTIONS } from '@/lib/constants/enhancements';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface EnhancementOptionsProps {
  selectedEnhancements: string[];
  onEnhancementsChange: (enhancements: string[]) => void;
}

export function EnhancementOptions({
  selectedEnhancements,
  onEnhancementsChange,
}: EnhancementOptionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold">Select Enhancements</h3>
          <p className="text-sm text-muted-foreground">
            Hover over each option to see examples
          </p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/faq#enhancements" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Learn More
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {ENHANCEMENT_OPTIONS.map((option) => {
          const Icon = option.icon;
          return (
            <TooltipProvider key={option.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card
                    className="p-3 cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => {
                      const isSelected = selectedEnhancements.includes(
                        option.id
                      );
                      onEnhancementsChange(
                        isSelected
                          ? selectedEnhancements.filter(
                              (id) => id !== option.id
                            )
                          : [...selectedEnhancements, option.id]
                      );
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id={option.id}
                        checked={selectedEnhancements.includes(option.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label
                          htmlFor={option.id}
                          className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                        >
                          <Icon className="h-4 w-4" />
                          {option.label}
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="right" className="w-[300px] p-0">
                  <div className="space-y-3">
                    <div className="p-3 border-b">
                      <p className="text-sm">{option.details}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="space-y-1.5 p-3">
                        <p className="text-xs font-medium">Before</p>
                        <img
                          src={option.example.before}
                          alt="Before enhancement"
                          className="w-full aspect-video object-cover rounded-sm"
                        />
                      </div>
                      <div className="space-y-1.5 p-3">
                        <p className="text-xs font-medium">After</p>
                        <img
                          src={option.example.after}
                          alt="After enhancement"
                          className="w-full aspect-video object-cover rounded-sm"
                        />
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}
