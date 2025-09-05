import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'main';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  as: Component = 'section',
  id 
}: SectionProps) {
  return (
    <Component id={id} className={`py-12 ${className}`}>
      {children}
    </Component>
  );
}
