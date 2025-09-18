'use client';

import { User } from '@/lib/types';

interface UserProfileBadgeProps {
  user: User;
  variant?: 'default' | 'withRating';
  className?: string;
}

export function UserProfileBadge({ 
  user, 
  variant = 'default',
  className = '' 
}: UserProfileBadgeProps) {
  const displayName = user.ensName || user.farcasterId || `User ${user.userId}`;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
        {displayName.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-text-primary truncate">
          {displayName}
        </p>
        {variant === 'withRating' && (
          <div className="flex items-center space-x-1">
            <span className="text-xs text-accent">★</span>
            <span className="text-xs text-text-secondary">
              {user.reputationScore.toFixed(1)} ({user.completedTasksCount} tasks)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
