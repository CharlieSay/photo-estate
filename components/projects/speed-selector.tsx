'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ProcessingSpeed } from '@/types/project';
import { Clock, Zap } from 'lucide-react';

interface SpeedSelectorProps {
  value: ProcessingSpeed;
  onChange: (value: ProcessingSpeed) => void;
}

export function SpeedSelector({ value, onChange }: SpeedSelectorProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => onChange(value as ProcessingSpeed)}
      className="grid grid-cols-2 gap-4"
    >
      <div className="relative">
        <RadioGroupItem
          value="standard"
          id="standard"
          className="peer sr-only"
        />
        <Label
          htmlFor="standard"
          className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
        >
          <Clock className="h-5 w-5" />
          <div className="text-center">
            <p className="font-medium">Standard</p>
            <p className="text-sm text-muted-foreground">~10-15 minutes</p>
          </div>
        </Label>
      </div>

      <div className="relative">
        <RadioGroupItem
          value="expedited"
          id="expedited"
          className="peer sr-only"
        />
        <Label
          htmlFor="expedited"
          className="flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
        >
          <Zap className="h-5 w-5 text-yellow-500" />
          <div className="text-center">
            <p className="font-medium">Expedited</p>
            <p className="text-sm text-muted-foreground">2-3 minutes</p>
          </div>
        </Label>
      </div>
    </RadioGroup>
  );
}
