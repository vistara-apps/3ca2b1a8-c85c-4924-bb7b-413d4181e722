'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-600 focus:ring-primary disabled:bg-gray-600',
    secondary: 'bg-surface text-text-primary hover:bg-gray-600 focus:ring-surface disabled:bg-gray-700',
    outline: 'border border-text-secondary text-text-secondary hover:bg-surface focus:ring-text-secondary disabled:border-gray-600 disabled:text-gray-600',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
