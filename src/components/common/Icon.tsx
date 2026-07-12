import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20 }) => {
  const LucideIcon = ((Icons as unknown) as Record<string, React.FC<{ className?: string; size?: number }>>)[name] || Icons.ShieldCheck;
  return <LucideIcon className={className} size={size} />;
};
