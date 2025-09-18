'use client';

import { ReactNode } from 'react';

interface NotificationBannerProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning';
  onClose?: () => void;
  className?: string;
}

export function NotificationBanner({ 
  children, 
  variant = 'info',
  onClose,
  className = '' 
}: NotificationBannerProps) {
  const variantClasses = {
    info: 'bg-blue-900 border-blue-700 text-blue-100',
    success: 'bg-green-900 border-green-700 text-green-100',
    warning: 'bg-yellow-900 border-yellow-700 text-yellow-100',
  };

  const iconMap = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
  };

  return (
    <div className={`border rounded-md p-3 flex items-center space-x-3 animate-slide-up ${variantClasses[variant]} ${className}`}>
      <span className="text-lg">{iconMap[variant]}</span>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-current hover:opacity-70 transition-opacity duration-200"
        >
          ✕
        </button>
      )}
    </div>
  );
}
