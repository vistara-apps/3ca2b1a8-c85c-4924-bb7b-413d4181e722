'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseInputProps {
  label?: string;
  error?: string;
  variant?: 'default' | 'textarea';
  className?: string;
}

type TextInputProps = BaseInputProps & 
  (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

export function TextInput({ 
  label, 
  error, 
  variant = 'default',
  className = '',
  ...props 
}: TextInputProps) {
  const baseClasses = 'w-full px-3 py-2 bg-surface border border-gray-600 rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200';
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      {variant === 'textarea' ? (
        <textarea
          className={`${baseClasses} ${errorClasses} resize-none`}
          rows={3}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`${baseClasses} ${errorClasses}`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
