import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'content' | 'full';
}

export default function Container({ 
  children, 
  className = '', 
  maxWidth = 'content' 
}: ContainerProps) {
  const maxWidthClass = maxWidth === 'content' ? 'max-w-content' : 'max-w-full';
  
  return (
    <div className={`mx-auto px-6 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}
