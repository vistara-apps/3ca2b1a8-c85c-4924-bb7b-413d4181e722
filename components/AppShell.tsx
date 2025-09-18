'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-xl mx-auto px-4 pb-20">
        {children}
      </div>
    </div>
  );
}
