import React from 'react';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type LayoutSwitcherProps = {
  onLayoutChange: (layout: string) => void;
  currentLayout: string;
};

const LayoutSwitcher: React.FC<LayoutSwitcherProps> = ({ onLayoutChange, currentLayout }) => {
  const layouts = [
    { value: 'full-width', label: 'Full Width' },
    { value: 'max-w-screen-md', label: 'Boxed (MD)' },
    { value: 'max-w-screen-lg', label: 'Boxed (LG)' },
    { value: 'max-w-screen-xl', label: 'Boxed (XL)' },

  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <h4 className="mb-2 text-sm font-semibold">Choose Layout</h4>
      <RadioGroup onValueChange={onLayoutChange} value={currentLayout} className="space-y-2">
        {layouts.map(layout => (
          <div key={layout.value} className="flex items-center space-x-2">
            <RadioGroupItem value={layout.value} id={`layout-${layout.value}`} />
            <Label htmlFor={`layout-${layout.value}`}>{layout.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default LayoutSwitcher;
