'use client';

import { Task } from '@/lib/types';
import { UserProfileBadge } from './UserProfileBadge';
import { Button } from './Button';

interface TaskCardProps {
  task: Task;
  variant?: 'default' | 'compact';
  onAccept?: (taskId: string) => void;
  onComplete?: (taskId: string) => void;
  className?: string;
}

export function TaskCard({ 
  task, 
  variant = 'default',
  onAccept,
  onComplete,
  className = '' 
}: TaskCardProps) {
  const isCompact = variant === 'compact';

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-400';
      case 'accepted': return 'text-blue-400';
      case 'completed': return 'text-accent';
      case 'cancelled': return 'text-red-400';
      default: return 'text-text-secondary';
    }
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className={`bg-surface rounded-lg p-4 shadow-card animate-fade-in ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            {task.description.includes('coffee') ? '☕' : 
             task.description.includes('dog') ? '🐕' : '📝'}
          </div>
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <span>{task.distance}</span>
            <span>•</span>
            <span>{getTimeAgo(task.createdAt)}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-lg font-bold text-accent">
            {task.paymentAmount} {task.paymentToken}
          </span>
        </div>
      </div>

      {/* Description */}
      <h3 className={`font-semibold text-text-primary mb-2 ${isCompact ? 'text-sm' : 'text-base'}`}>
        {task.description}
      </h3>

      {/* Location */}
      <p className="text-sm text-text-secondary mb-3">
        📍 {task.location}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {task.requester && (
          <UserProfileBadge 
            user={task.requester} 
            variant="withRating"
          />
        )}
        
        <div className="flex items-center space-x-2">
          <span className={`text-xs font-medium ${getStatusColor(task.status)}`}>
            {task.status.toUpperCase()}
          </span>
          
          {task.status === 'pending' && onAccept && (
            <Button 
              size="sm" 
              onClick={() => onAccept(task.taskId)}
              className="ml-2"
            >
              Accept
            </Button>
          )}
          
          {task.status === 'accepted' && onComplete && (
            <Button 
              size="sm" 
              variant="secondary"
              onClick={() => onComplete(task.taskId)}
              className="ml-2"
            >
              Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
