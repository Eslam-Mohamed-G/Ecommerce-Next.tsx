import React from 'react';
interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-12 w-12',
};

export default function LoadingSpinner() {
  return (
    <div>LoadingSpinner</div>
  )
}